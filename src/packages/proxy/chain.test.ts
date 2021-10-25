import { proxyChain } from './chain';

describe('chain', () => {
	it('chain call', () => {
		const request = proxyChain((keys: string[]) => keys);

		const ret = request.www.baidu.com();

		expect(ret).toEqual(['www', 'baidu', 'com']);
	});
});
