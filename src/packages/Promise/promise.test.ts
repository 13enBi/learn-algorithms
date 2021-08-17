import { timeout } from '../../utils/timer';
import { _Promise } from './promise';
describe('promise', () => {
	it('then', async () => {
		const p = new _Promise((resolve) => {
			setTimeout(() => {
				resolve(1);
			}, 1000);
		});

		p.then((value) => expect(value).toBe(1));

		await timeout(1001);
	});

	it('catch', async () => {
		const p = new _Promise((_, reject) => {
			setTimeout(() => {
				reject('reason');
			}, 1000);
		});

		p.catch((reason) => {
			expect(reason).toBe('reason');
		});

		await timeout(1001);
	});
});
