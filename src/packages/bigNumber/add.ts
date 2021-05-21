/**
 *  +undefined -> NaN , +null -> NaN , +{}-> NaN , +[] -> 0
 *  ~~undefined -> 0, ~~null -> 0, ~~{} -> 0, ~~[] -> 0
 */

export const bigNumAdd = (n1: string, n2: string) => {
	const l = Math.max(n1.length, n2.length);

	n1 = n1.padStart(l, '0');
	n2 = n2.padStart(l, '0');

	const a = [...n1];

	let sum = 0;
	let d = 0;
	for (let i = l - 1; i >= 0; i--) {
		sum = ~~n1[i] + ~~n2[i] + d;
		a[i] = (sum % 10) + '';
		d = +(sum >= 10);
	}

	n1 = a.join('');
	if (d) {
		n1 = d + n1;
	}

	return n1;
};
