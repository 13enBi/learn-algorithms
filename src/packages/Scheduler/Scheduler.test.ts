import { Scheduler } from './Scheduler';

const timeout = (time = 2000) =>
	new Promise((resolve) => {
		setTimeout(resolve, time);
	});

describe('Scheduler', () => {
	test('Scheduler', async () => {
		const scheduler = new Scheduler();
		const cb: number[] = [];

		const addTask = (time: number, order: number) => {
			return scheduler
				.push(() => timeout(time))
				.then(() => {
					cb.push(order);
				});
		};

		addTask(400, 1), addTask(350, 2), addTask(400, 3), addTask(300, 4);

		await timeout(1e3);

		expect(cb).toEqual([2, 1, 4, 3]);
	});
});
