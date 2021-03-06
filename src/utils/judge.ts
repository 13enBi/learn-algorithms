import { fromEntriesMap } from './object';
import { camelizeJoin } from './string';
import * as is from './is';

const judge =
	(both: boolean) =>
	(is: (val: unknown) => boolean) =>
	(...args: unknown[]) =>
		args[both ? 'every' : 'some'](is);

type JudgeFn = (...args: unknown[]) => boolean;

const both = judge(true);

const or = judge(false);

export const {
	bothIsArray,
	bothIsBoolean,
	bothIsString,
	bothIsFunction,
	bothIsNumber,
	bothIsObject,
	bothIsPromise,
} = fromEntriesMap<Record<string, JudgeFn>>(is, ([key, fn]) => [
	camelizeJoin('both', key),
	both(fn),
]);

export const withDefault =
	<T>(checker: (value: T) => boolean, defaultVal: T) =>
	(value: any): T =>
		checker(value) ? value : defaultVal;
