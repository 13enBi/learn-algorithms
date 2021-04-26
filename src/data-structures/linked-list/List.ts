type NullishNode = null | ListNode;

class ListNode<T = any> {
	constructor(public data: T, public prev: NullishNode = null, public next: NullishNode = null) {}
}

const IS = Symbol();

export class List<T = any> {
	protected [IS] = true;

	head: NullishNode = null;
	tail: NullishNode = null;

	static isList(val: any): val is List {
		return val && val[IS];
	}

	static of<T>(iterator: T[] | IterableIterator<T>) {
		const list = new List<T>();

		for (const data of iterator) {
			list.append(data);
		}

		return list;
	}

	*[Symbol.iterator](): Iterator<T> {
		let next: NullishNode = this.head;
		while (next) {
			yield next.data;
			next = next.next;
		}
	}

	preapppend(data: T) {
		const node = new ListNode(data, null, this.head);

		if (!this.head) {
			this.tail = node;
		}

		this.head = node;

		return this;
	}

	append(data: T) {
		const node = new ListNode(data, this.tail);

		if (!this.head) {
			this.head = node;
		} else if (this.tail) {
			this.tail.next = node;
		}

		this.tail = node;

		return this;
	}

	include(find: T) {
		for (const data of this) {
			if (data === find) {
				return true;
			}
		}

		return false;
	}

	find(index: number) {}

	delete(index: number) {}

	reverse() {}
}
