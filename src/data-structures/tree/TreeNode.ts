import { Nullish } from '../../utils/type';

type NullishNode = Nullish<TreeNode>;

export class TreeNode<T = any> {
	left: NullishNode = null;
	right: NullishNode = null;
	parent: NullishNode = null;

	constructor(public data: T) {}

	get height(): number {
		const { right, left } = this;

		const rH = right?.height || 0;
		const lH = left?.height || 0;

		return Math.max(rH, lH) + 1;
	}

	createNode(val: T) {
		return new TreeNode(val);
	}

	set(type: 'left' | 'right', val: T) {
		const node = this.createNode(val);

		node.parent = this;

		this[type] = node;

		return this;
	}

	setRight(val: T) {
		return this.set('right', val);
	}

	setLeft(val: T) {
		return this.set('left', val);
	}

	*[Symbol.iterator](): Iterator<T> {
		const { right, left, data } = this;

		if (left) for (const i of left) yield i;

		yield data;

		if (right) for (const i of right) yield i;
	}
}
