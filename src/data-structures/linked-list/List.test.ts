import { List } from './List';

describe('list', () => {
	test('isList', () => {
		const list = new List();

		expect(List.isList(list)).toBe(true);
	});

	test('of', () => {
		const list = List.of([0, 1, 2]);

		expect(list.head?.data).toBe(0);
		expect(list.head?.next?.data).toBe(1);
		expect(list.tail?.data).toBe(2);
		expect(list.head?.next?.next).toBe(list.tail);
	});

	test('append', () => {
		const list = new List();

		for (let i = 0; i < 3; i++) {
			list.append(i);
		}

		expect(list.head?.data).toBe(0);
		expect(list.head?.next?.data).toBe(1);
		expect(list.tail?.data).toBe(2);
		expect(list.head?.next?.next).toBe(list.tail);
	});

	test('preapppend', () => {
		const list = new List();

		for (let i = 0; i < 3; i++) {
			list.preapppend(i);
		}

		expect(list.head?.data).toBe(2);
		expect(list.head?.next?.data).toBe(1);
		expect(list.tail?.data).toBe(0);
		expect(list.head?.next?.next).toBe(list.tail);
	});

	test('iterator', () => {
		const list = List.of([1, 2, 3, 4]);

		expect([...list]).toEqual([1, 2, 3, 4]);
	});

	test('include', () => {
		const list = List.of([1, 2, 3, 4]);

		expect(list.include(2)).toBe(true);
		expect(list.include(10)).toBe(false);
	});

	test('reverse', () => {
		const list = List.of([1, 2, 3, 4]);

		expect([...list.reverse()]).toEqual([4, 3, 2, 1]);
	});

	test('at', () => {
		const list = List.of([1, 2, 3, 4]);

		expect(list.at(1)?.data).toBe(2);
		expect(list.at(-1)?.data).toBe(4);
	});

	test('delete', () => {
		const list = List.of([1, 2, 3, 4, 5]);

		list.delete(1);

		expect([...list]).toEqual([1, 3, 4, 5]);
		expect(list.length).toBe(4);

		list.delete(0);

		expect([...list]).toEqual([3, 4, 5]);
		expect(list.head?.data).toBe(3);
		expect(list.length).toBe(3);

		list.delete(2);
		expect([...list]).toEqual([3, 4]);
		expect(list.tail?.data).toBe(4);
		expect(list.length).toBe(2);

		list.delete(-1);
		expect([...list]).toEqual([3]);
		expect(list.tail?.data).toBe(3);
		expect(list.length).toBe(1);
	});

	test('clear', () => {
		const list = List.of([1, 2, 3]);

		list.clear();
		expect([...list]).toEqual([]);
		expect(list.head).toBe(null);
		expect(list.tail).toBe(null);
		expect(list.length).toBe(0);
	});
});
