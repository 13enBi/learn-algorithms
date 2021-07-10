import { timeout } from '../../utils/timer';
import { compose } from './compose';

describe('compose', () => {
	test('compose', async () => {
		const ret: number[] = [];

		const push = (n: number) => ret.push(n);

		compose([
			async (next) => {
				push(1);
				await next();
				push(2);
			},

			async (next) => {
				push(3);
				await timeout(200);
				await next();
				push(4);
			},
			async (next) => {
				push(5);
				await next();
				push(6);
			},
		]);

		await timeout(0);
		expect(ret).toEqual([1, 3]);

		await timeout(201);
		expect(ret).toEqual([1, 3, 5, 6, 4, 2]);
	});
});
