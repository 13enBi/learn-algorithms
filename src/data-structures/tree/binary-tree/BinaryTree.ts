type NullishNode = null | BinaryTreeNode;

export class BinaryTreeNode<T = any> {
	left: NullishNode = null;
	right: NullishNode = null;
	parent: NullishNode = null;

	constructor(public data: T) {}
}
