import { take } from '../function';

describe('function', () => {
	describe('take', () => {
		test('should work', () => {
			const fn = jest.fn();

			const mocker = take(fn, 3);
			mocker(), mocker(), mocker(), mocker();

			expect(fn).toHaveBeenCalledTimes(3);
		});
	});
});
