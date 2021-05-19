import { isFunction } from '../../utils/type';
import { curry } from './curry';

describe('curry', () => {
	test('def', () => {
		expect(curry).toBeDefined();
	});

	test('curry', () => {
		const sum = (a: number, b: number, c: number) => a + b + c;

		const curried = curry(sum);
		expect(isFunction(curried)).toBeTruthy();

		const c1 = curried(1);
		expect(isFunction(c1)).toBeTruthy();

		const result = c1(2)(3);
		expect(result).toBe(6);
	});
});
