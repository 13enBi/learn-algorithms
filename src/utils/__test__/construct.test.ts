import { omit, pick } from '../construct';

describe('construct', () => {
	test('pick', () => {
		const target = { a: 1, b: 2, c: 3, d: 4 };

		expect(pick(target, ['b', 'd'])).toEqual({ b: 2, d: 4 });
	});

	test('omit', () => {
		const target = { a: 1, b: 2, c: 3, d: 4 };

		expect(omit(target, ['b', 'd'])).toEqual({ a: 1, c: 3 });
	});
});
