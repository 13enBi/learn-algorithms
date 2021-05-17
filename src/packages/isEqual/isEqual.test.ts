import { isEqual } from './isEqual';

describe('isEqual', () => {
	test('def', () => {
		expect(isEqual).toBeDefined();
	});

	test('base type', () => {
		expect(isEqual('1', 1)).toBeFalsy();
		expect(isEqual(null, undefined)).toBeFalsy();
		expect(isEqual(false, 0)).toBeFalsy();
		expect(isEqual('', false)).toBeFalsy();
	});

	test('object', () => {
		const a: any = { a: 1, b: { c: { d: 2 } } };
		const b: any = { a: 1, b: { c: { d: 2 } } };

		expect(isEqual(a, b)).toBeTruthy();

		a.b.c.d = 3;
		expect(isEqual(a, b)).toBeFalsy();

		const c = { a: 1, b: 2 };
		const d = { a: 1 };
		expect(isEqual(c, d)).toBeFalsy();
	});
});
