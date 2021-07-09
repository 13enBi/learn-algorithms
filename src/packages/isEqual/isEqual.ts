import { bothIsObject } from '../../utils/judge';
import { getTag, has } from '../../utils/type';

const equalArray = (a: any[], b: any[]) => {
	const len = a.length;
	if (len !== b.length) return false;

	for (let i = 0; i < len; i++) {
		if (!isEqual(a[i], b[i])) return false;
	}

	return true;
};

const is = Object.is;

//TODO:循环引用
export const isEqual = (a: any, b: any) => {
	if (is(a, b)) return true;

	if (a === null || b === null) return a === b;

	const tag = getTag(a);

	if (tag !== getTag(b)) return false;

	switch (tag) {
		case 'Array':
			return equalArray(a, b);

		case 'Number':
		case 'Boolean':
		case 'Date':
			return is(+a, +b);

		case 'RegExp':
			return is(a.source, b.source) && is(a.flags, a.flags);

		case 'String':
			return is(`${a}`, `${b}`);

		case 'Map':
		case 'Set':
			return equalArray([...a], [...b]);
	}

	if (bothIsObject(a, b)) {
		for (const key in a) {
			if (!has(b, key) || !isEqual(a[key], b[key])) return false;
		}
	}

	return true;
};
