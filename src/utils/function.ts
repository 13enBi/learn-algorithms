export type Func<T extends any[] = any[], R = any> = (...args: T) => R;

export const Noop: (...args: any) => any = () => {};

export const wrapMicrotask =
	<T extends any[]>(callback: Func<T, void>) =>
	(...args: T) =>
		queueMicrotask(() => callback(...args));

export const take = <T extends any[], R>(fn: Func<T, R>, count: number) =>
	count <= 0
		? fn
		: (...args: T): R => {
				let lastResult: R = fn(...args);
				return count-- > 1 ? (lastResult = fn(...args)) : lastResult;
		  };

export const callWithErrorHandler =
	<T extends any[], R>(fn: Func<T, R>, handler: Func<[any], any>) =>
	(...args: T): R | void => {
		try {
			return fn(...args);
		} catch (error) {
			handler(error);
		}
	};
