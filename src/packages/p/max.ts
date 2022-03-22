type Awaited<T> = T extends null | undefined
	? T
	: T extends object & { then(onfulfilled: infer F): any }
	? F extends (value: infer V, ...args: any) => any
		? Awaited<V>
		: never
	: T;

export const pMax = async <P extends Promise<any>[] | []>(
	promises: P,
	max: number,
): Promise<{ [K in keyof P]: PromiseSettledResult<Awaited<P[K]>> }> => {
	let currentIndex = 0;

	const result: any = [];

	const run = async () => {
		const index = currentIndex++;
		const p = promises[index];
		if (!p) return;

		try {
			result[index] = {
				status: 'fulfilled',
				value: await p,
			};
		} catch (reason) {
			result[index] = {
				status: 'rejected',
				reason,
			};
		} finally {
			await run();
		}
	};

	await Promise.all([...Array(max)].map(run));

	return result;
};
