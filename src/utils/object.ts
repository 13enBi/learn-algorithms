import { Obj } from './type';

const { fromEntries, entries } = Object;

export const fromEntriesCallback = <T extends Obj>(
	target: T,
	cb: (entries: [string, any][]) => [string, any][],
) => fromEntries(cb(entries(target)));

export const fromEntriesMap = <T extends Obj>(
	target: T,
	cb: (payload: [string, any], index: number) => any,
) => fromEntriesCallback(target, (entries) => entries.map(cb));
