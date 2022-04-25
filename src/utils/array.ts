export const concat = <T extends any[][]>(...args: T) => args.flat(1);

export const loop = (handler: (index: number) => void, count: number) => {
	for (let i = 0; i < count; i++) handler(i);
};

type EachActions = {
	break: () => never;
	continue: () => never;
};

//花里胡哨...
const CONTINUE = Symbol('continue');
const BREAK = Symbol('break');
const eachActions = {
	break: () => {
		throw BREAK;
	},
	continue: () => {
		throw CONTINUE;
	},
};
export const each = <T extends any[]>(
	array: T,
	handler: (value: T[number], index: number, actions: EachActions) => void,
) => {
	for (let i = 0, len = array.length; i < len; i++) {
		try {
			handler(array[i], i, eachActions);
		} catch (e) {
			if (e === CONTINUE) continue;
			if (e === BREAK) break;
			throw e;
		}
	}
};
