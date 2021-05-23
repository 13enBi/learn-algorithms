import { uniqByInclude, uniqBySet, uniqByHash } from './uniq';

describe('uniq', () => {
	test('uniq', () => {
		const arr = [1, 2, 3, 4, 1, 2, 8, 5];
		const result = [1, 2, 3, 4, 8, 5];

		expect(uniqBySet(arr)).toEqual(result);
		expect(uniqByInclude(arr)).toEqual(result);
		expect(uniqByHash(arr)).toEqual(result);
	});
});
