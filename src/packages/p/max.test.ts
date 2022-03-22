import { timeout } from '../../utils/timer';
import { pMax } from './max';

describe('pMax', () => {
	it('should work', async () => {
		const promises = [100, 400, 500, 200, 100].map((time) => timeout(time).then(() => time));

		expect(await pMax(promises, 2)).toEqual([
			{ status: 'fulfilled', value: 100 },
			{ status: 'fulfilled', value: 400 },
			{ status: 'fulfilled', value: 500 },
			{ status: 'fulfilled', value: 200 },
			{ status: 'fulfilled', value: 100 },
		]);
	});
});
