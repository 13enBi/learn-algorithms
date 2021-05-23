export const uniqBySet = <T>(arr: T[]): T[] => {
	return [...new Set(arr)];
};

export const uniqByInclude = <T>(arr: T[]): T[] => {
	const result: T[] = [];

	for (const i of arr) {
		!result.includes(i) && result.push(i);
	}

	return result;
};

export const uniqByHash = <T>(arr: T[]): T[] => {
	const result: T[] = [];
	const map = new Map();

	for (const i of arr) {
		if (!map.has(i)) {
			map.set(i, true);
			result.push(i);
		}
	}

	return result;
};
