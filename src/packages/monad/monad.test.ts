import { Monad } from './monad';
describe('monad', () => {
	it('should work', () => {
		const add = (x: number) => ++x;
		const double = (x: number) => 2 * x;

		const value = Monad.of(1).then(add).then(double).resolve();

		expect(value).toBe(4);
	});
});
