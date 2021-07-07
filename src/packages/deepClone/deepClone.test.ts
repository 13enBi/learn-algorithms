import { deepClone } from './deepClone';

describe('deepClone', () => {
	test('primitive type', () => {
		expect(deepClone(1)).toBe(1);
		expect(deepClone('1')).toBe('1');
		expect(deepClone(void 0)).toBe(void 0);
		expect(deepClone(null)).toBe(null);
		expect(deepClone(true)).toBe(true);
		const symbol = Symbol();
		expect(deepClone(symbol)).toBe(symbol);
	});

	test('array', () => {
		expect(deepClone([])).toEqual([]);
		expect(deepClone([1, 2, 3])).toEqual([1, 2, 3]);
		expect(deepClone([{ a: 1 }, { b: 2 }, { c: 3 }])).toEqual([{ a: 1 }, { b: 2 }, { c: 3 }]);
		expect(deepClone([[1], [[2]], [[[3]]]])).toEqual([[1], [[2]], [[[3]]]]);
	});

	test('object', () => {
		expect(
			deepClone({
				a: 1,
				b: '1',
				c: void 0,
				d: null,
				e: false,
				f: {
					g: [
						{
							h: {
								i: 1,
							},
						},
					],
				},
			})
		).toEqual({
			a: 1,
			b: '1',
			c: void 0,
			d: null,
			e: false,
			f: {
				g: [
					{
						h: {
							i: 1,
						},
					},
				],
			},
		});
	});
});
