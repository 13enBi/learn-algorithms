const capRE = /^\S/;
export const capitalize = (str: string) => str.replace(capRE, (s) => s.toUpperCase());

export const camelizeJoin = (...strs: string[]) => strs.reduce((acc, str) => acc + capitalize(str));
