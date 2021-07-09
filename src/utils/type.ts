export type Nullish<T> = T | null;



const toString = Object.prototype.toString;
export const getTag = (val: any): string => toString.call(val).slice(8, -1);

export const has = Reflect.has;

const hasOwnProperty = Object.prototype.hasOwnProperty;
export const hasOwn = (obj: Record<string, any>, key: PropertyKey) => hasOwnProperty.call(obj, key);

export type Obj = Record<string, any>;
