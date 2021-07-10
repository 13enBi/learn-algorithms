type Next = () => Promise<void>;

type Middleware = (next: Next) => Promise<void>;

export const compose = (middlewares: Middleware[]) => {
	const { length } = middlewares;

	let currentIdx = -1;

	const dispatch: () => Promise<void> = (index = ++currentIdx) =>
		index === length ? Promise.resolve() : middlewares[index](() => dispatch());

	dispatch();
};
