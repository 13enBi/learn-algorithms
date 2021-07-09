import { concat } from '../../utils/array';
import { bothIsArray, bothIsObject } from '../../utils/judge';
import { Obj } from '../../utils/type';

const { entries } = Object;

export const deepAssgin = <T extends Obj, S extends Obj>(target: T, source: S) =>
	entries(source).reduce((target, [key, value]) => {
		const args = [target[key], value] as const;

		(target as Obj)[key] = bothIsObject(...args)
			? deepAssgin(...args)
			: bothIsArray(...args)
			? concat(...args)
			: value;

		return target;
	}, target) as S & T;
