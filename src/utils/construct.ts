import { fromEntriesCallback } from './object';
import { Obj } from './type';

const construct =
	<B extends boolean>(b: B) =>
	<T extends Obj, K extends keyof T>(target: T, ...keys: (K | K[])[]) => {
		type Result = B extends true ? Pick<T, K> : Omit<T, K>;

		keys = keys.flat() as K[];

		return fromEntriesCallback(target, (entries) =>
			entries.filter(([k]) => {
				const is = keys.includes(k as K);

				return b ? is : !is;
			}),
		) as Result;
	};

export const pick = construct(true);
export const omit = construct(false);
