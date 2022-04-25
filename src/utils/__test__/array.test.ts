import { each } from '../array';

describe('array', () => {
	describe('each', () => {
		it('should work', () => {
			const fn = jest.fn();
			const array = [1, 2, 3];
			each(array, fn);

			expect(fn).toHaveBeenCalledTimes(array.length);
			expect(fn).toHaveBeenCalledWith(1, 0, expect.any(Object));
		});

		it('continue should work', () => {
			const fn = jest.fn();
			const array = [1, 2, 3];

			each(array, (value, index, actions) => {
				if (value !== 3) actions.continue();
				fn(value, index);
			});

			expect(fn).toHaveBeenCalledTimes(1);
			expect(fn).lastCalledWith(3, 2);
		});

		it('break should work', () => {
			const fn = jest.fn();
			const array = [1, 2, 3];

			each(array, (value, index, actions) => {
				if (value == 3) actions.break();
				fn(value, index);
			});

			expect(fn).toHaveBeenCalledTimes(2);
			expect(fn).lastCalledWith(2, 1);
		});
	});
});
