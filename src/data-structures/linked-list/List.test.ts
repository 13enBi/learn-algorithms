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

    test('preapppend',() => {
        const list = new List();

		for (let i = 0; i < 3; i++) {
			list.preapppend(i);
		}

		expect(list.head?.data).toBe(2);
		expect(list.head?.next?.data).toBe(1);
		expect(list.tail?.data).toBe(0);
		expect(list.head?.next?.next).toBe(list.tail);
    })
});
