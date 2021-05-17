export type Nullish<T> = T | null;

export const isString = (val: unknown): val is string => typeof val === 'string';
export const isNumber = (val: unknown): val is number => typeof val === 'number';
export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean';
export const isArray = Array.isArray;
export const isObject = (val: unknown): val is Record<string, any> =>
	val != null && typeof val === 'object' && isArray(val) === false;
export const isFunction = (val: unknown): val is Function => typeof val === 'function';
export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
	return val instanceof Promise && isFunction(val.then) && isFunction(val.catch);
};

const toString = Object.prototype.toString;
export const getTag = (val: any): string => toString.call(val).slice(8, -1);

export const has = Reflect.has;

const hasOwnProperty = Object.prototype.hasOwnProperty;
export const hasOwn = (obj: Record<string, any>, key: PropertyKey) => hasOwnProperty.call(obj, key);
