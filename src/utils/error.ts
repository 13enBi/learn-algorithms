import { Func } from './function';
import { isPromise } from './is';

type ErrorHandler<R = any> = Func<any, R>;

export const callWithErrorHandler = <T extends any[], R, ER>(
	handler: ErrorHandler<ER>,
	fn: Func<T, R>,
	args: T
) => {
	try {
		const result = fn(...args);

		if (isPromise(result)) result.catch(handler);

		return result;
	} catch (error) {
		return handler(error);
	}
};
