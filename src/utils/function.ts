export type Func<T extends any[], R> = (...args: T) => R;

export const Noop: (...args: any) => any = () => {};

export const wrapMicrotask =
	<T extends any[]>(callback: Func<T, void>) =>
	(...args: T) =>
		queueMicrotask(() => callback(...args));

 
