import { Func, Noop } from '../../utils/function';

type ChainFunc<A extends any[] = any[], R = any> = Func<[string[], ...A], R>;

interface ChainItem<A extends any[] = any[], R = any> extends Func<A, R> {
	[key: string]: ChainItem<A, R>;
}

export const proxyChain = <A extends any[] = any[], R = any>(cb: ChainFunc<A, R>) => {
	const chain = (keys: string[] = []): ChainItem<A, R> =>
		new Proxy(Noop as any, {
			apply: (_, __, args: A) => cb(keys, ...args),

			get: (_, nextKey: string) => chain([...keys, nextKey]),
		});

	return chain();
};
