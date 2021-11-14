import { Obj } from './type';

export const isString = (val: unknown): val is string => typeof val === 'string';
export const isNumber = (val: unknown): val is number => typeof val === 'number';
export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean';
export const isArray = Array.isArray;
export const isObject = (val: unknown): val is Obj =>
	val != null && typeof val === 'object' && isArray(val) === false;
export const isFunction = (val: unknown): val is Function => typeof val === 'function';
export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
	return val instanceof Promise && isFunction(val.then) && isFunction(val.catch);
};

const CTOR_MARK = Symbol();
const CTOR_CHECKER: any = {
	get length() {
		throw CTOR_MARK;
	},
};
export const isConstructor = (target: any) => {
	try {
		Reflect.construct(target, CTOR_CHECKER);
	} catch (error) {
		return error === CTOR_MARK;
	}
};
