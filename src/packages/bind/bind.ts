export const bind = (fn: any, ctx: any, ...args: any[]) => {
	return (...args2: any) => fn.apply(ctx, ...args, ...args2);
};
