import { Noop, wrapMicrotask } from '../../utils/function';
import { isFunction } from '../../utils/is';
import { withDefault } from '../../utils/judge';

enum PromiseState {
	Pennding,
	Fulfilled,
	Rejected,
}

type Resolve<T> = (value: T) => void;
type Reject = (reason: any) => void;
type Fulfilled<T, R> = (value: T) => R;
type Catched<R> = (reason: any) => R;
type Undef = undefined | null | void;

const withNoop = withDefault(isFunction, Noop);

const checkState = (state: PromiseState) => (value: PromiseState) => state === value;
const isFulfilled = checkState(PromiseState.Fulfilled);
const isRejected = checkState(PromiseState.Rejected);

const isPromise = (value: unknown): value is _Promise<any> => value instanceof _Promise;

const run = (value: any) => (fn: Function) => fn(value);

const transPromise =
	<T, R>(trans: Resolve<R> | Reject, callback: Fulfilled<T, R> | Catched<R>, isReject = false) =>
	(value: any): _Promise<R> => {
		const ret = callback(value);

		return isPromise(ret) ? (ret[isReject ? 'then' : 'catch'] as any)(trans) : trans(ret);
	};

class _Promise<T> {
	static resolve<T>(value: T) {
		return new _Promise<T>((r) => r(value));
	}

	static reject(reason: any) {
		return new _Promise((r, j) => j(reason));
	}

	static race<T extends _Promise<any>>(promises: T[]): _Promise<T> {
		return new _Promise<T>((r, j) => {
			promises.forEach((p) => p.then(r, j));
		});
	}

	static all<T extends _Promise<any>>(promises: T[]): _Promise<T[]> {
		let count = 0;
		const { length } = promises;
		const result: T[] = [];

		return new _Promise<T[]>((resolve, reject) => {
			promises.forEach((p, i) => {
				p.then((value: T) => {
					result[i] = value;

					if (count >= length) {
						resolve(result);
					}
				}, reject);
			});
		});
	}

	state = PromiseState.Pennding;
	result?: T;
	reason?: any;
	fulfilledCallback: Fulfilled<T, any>[] = [];
	rejectedCallback: Catched<any>[] = [];

	constructor(executor: (resolve: Resolve<T>, reject: Reject) => void) {
		const resolve = wrapMicrotask((value: T) => {
			this.result = value;
			this.state = PromiseState.Fulfilled;
			this.fulfilledCallback.forEach(run(this.result));
		});
		const reject = wrapMicrotask((reason: any) => {
			this.reason = reason;
			this.state = PromiseState.Rejected;
			this.rejectedCallback.forEach(run(this.reason));
		});

		try {
			executor(resolve, reject);
		} catch (error) {
			reject(error);
		}
	}

	then<R1, R2 = never>(_onFulfilled: Fulfilled<T, R1> | Undef, _onRejected: Catched<R2> | Undef) {
		const onFulfilled = withNoop(_onFulfilled);
		const onRejected = withNoop(_onRejected);

		return new _Promise<R1 | R2>((resolve, reject) => {
			const resolvePromise = transPromise(resolve, onFulfilled);
			const rejectPromise = transPromise(reject, onRejected, true);

			if (isFulfilled(this.state)) {
				return resolvePromise(this.result);
			}
			if (isRejected(this.state)) {
				return rejectPromise(this.reason);
			}

			this.fulfilledCallback.push(resolvePromise);

			this.rejectedCallback.push(rejectPromise);
		});
	}

	catch<R>(onRejected: Catched<R>) {
		return this.then(null, onRejected);
	}
}
