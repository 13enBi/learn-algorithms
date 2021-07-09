import { isArray, isObject } from '../../utils/is';
import { fromEntriesMap } from '../../utils/object';

export const deepClone = <T = any>(val: T): T =>
	isArray(val)
		? (val.map((v) => deepClone(v)) as any)
		: isObject(val)
		? fromEntriesMap(val, ([k, v]) => [k, deepClone(v)])
		: val;
