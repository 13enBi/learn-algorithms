export const concat = <T extends any[][]>(...args: T) => args.flat(1);

export const loop = (handler: (index: number) => void, count: number) => {
	for (let i = 0; i < count; i++) handler(i);
};
