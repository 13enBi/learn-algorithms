import { isObject } from '../../../utils/is';

type Then<R> = R extends Monad<any> ? R : Monad<R>;

export class Monad<T> {
	static of = <T>(value: T) => new Monad(value);
	static is = (value: unknown): value is Monad<any> => isObject(value) && value instanceof Monad;

	constructor(private value: T) {}

	resolve() {
		return this.value;
	}

	then<R>(fn: (value: T) => R): Then<R> {
		const next = fn(this.value);

		return (Monad.is(next) ? next : Monad.of(next)) as Then<R>;
	}
}
