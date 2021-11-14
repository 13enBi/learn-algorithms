export type Func<T extends any[] = any[], R = any> = (...args: T) => R;

export const Noop: (...args: any) => any = () => {};

export const wrapMicrotask =
	<T extends any[]>(callback: Func<T, void>) =>
	(...args: T) =>
		queueMicrotask(() => callback(...args));

export const take =
	<T extends any[], R>(fn: Func<T, R>, count: number) =>
	(...args: T): R | undefined =>
		count-- ? fn(...args) : void 0;
