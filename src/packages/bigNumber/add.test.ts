import { bigNumAdd } from './add';

describe('bigNumAdd', () => {
	test('add', () => {
		const n1 = '987654321987654321',
			n2 = '123456789123456789';

		expect(bigNumAdd(n1, n2)).toBe('1111111111111111110');

		const n3 = '123321',
			n4 = '123';

		expect(bigNumAdd(n3, n4)).toBe('123444');
	});
});
