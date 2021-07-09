import { deepAssgin } from './deepAssgin';

describe('deepAssgin', () => {
	test('object', () => {
		const target = { a: 1, b: { c: 2 }, arr: [1, 2, 3] };
		const src = { a: 2, b: { d: 3 }, arr: [4, 5, 6] };

		expect(deepAssgin(target, src)).toEqual({ a: 2, b: { c: 2, d: 3 }, arr: [1, 2, 3, 4, 5, 6] });
	});
});
