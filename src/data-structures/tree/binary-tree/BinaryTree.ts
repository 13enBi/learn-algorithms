import { TreeNode } from '../TreeNode';

type NullishNode = null | BinaryTreeNode;

export class BinaryTreeNode<T = any> extends TreeNode<T> {
	right: NullishNode = null;
	left: NullishNode = null;
	parent: NullishNode = null;

	createNode(data: T) {
		return new BinaryTreeNode(data);
	}

	insert(val: T): this {
		if (this.data === null) {
			this.data = val;
			return this;
		}

		const type = val > this.data ? 'right' : 'left';

		const node = this[type];

		if (node) {
			node.insert(val);
		} else {
			this.set(type, val);
		}

		return this;
	}
}

export class BinaryTree<T> {
	root = new BinaryTreeNode<T | null>(null);

	insert(data: T) {
		return this.root.insert(data);
	}

	[Symbol.iterator]() {
		return [...this.root];
	}
}
