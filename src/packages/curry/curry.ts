type Func = (...args: any[]) => any;

export const curry = <F extends Func>(fn: F) => {
	const l = fn.length;

	const curried =
		(fnArgs: any[] = []) =>
		(...args: any[]) => {
			fnArgs = [...fnArgs, ...args];
			return fnArgs.length < l ? curried(fnArgs) : fn(...fnArgs);
		};

	return curried([]);
};

 
  