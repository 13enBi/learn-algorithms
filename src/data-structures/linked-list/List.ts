type NullishNode = null | ListNode;

class ListNode<T = any> {
	constructor(public data: T, public prev: NullishNode = null, public next: NullishNode = null) {}
}

const IS = Symbol();

export class List<T = any> {
	protected [IS] = true;

	head: NullishNode = null;
	tail: NullishNode = null;

	length = 0;

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
		this.length++;

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
		this.length++;

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

	at(index: number) {
		if (index < 0) index += this.length;

		let current = this.head;
		while (index-- && current) {
			current = current.next;
		}

		return current;
	}

	delete(index: number) {}

	reverse() {
		let prev: NullishNode = null;
		let next: NullishNode = null;
		let current: NullishNode = this.head;

		while (current) {
			next = current.next;

			current.next = prev;
			current.prev = next;

			prev = current;
			current = next;
		}

		this.head = prev;
		this.tail = this.head;

		return this;
	}
}
