const capRE = /^\S/;
export const capitalize = (str: string) => str.replace(capRE, (s) => s.toUpperCase());

export const camelizeJoin = (...strs: string[]) => strs.reduce((acc, str) => acc + capitalize(str));

export const join = (separator: string, ...items: string[]) =>
	items.filter(Boolean).join(separator);

export const joinWith =
	(separator: string) =>
	(...items: string[]) =>
		join(separator, ...items);
