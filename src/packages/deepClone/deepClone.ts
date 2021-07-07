import { isArray, isObject } from '../../utils/type';

const { entries, fromEntries } = Object;

export const deepClone = <T = any>(val: T): T =>
	isArray(val)
		? (val.map((v) => deepClone(v)) as any)
		: isObject(val)
		? fromEntries(entries(val).map(([k, v]) => [k, deepClone(v)]))
		: val;
