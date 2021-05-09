import { BinaryTree, BinaryTreeNode } from './BinaryTree';

describe('tree', () => {
	test('def', () => {
		expect(BinaryTreeNode).toBeDefined();
	});

	test('created', () => {
		const {
			root: { data, left, right, parent },
		} = new BinaryTree();

		expect([data, left, right, parent]).toEqual([null, null, null, null]);
	});

	test('insert',() => {
		
	})
});
