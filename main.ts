import { List } from './src/data-structures/linked-list/List';
import { BinaryTree } from './src/data-structures/tree/binary-tree/BinaryTree';

window.a = BinaryTree;

let s = '';
for (let i = 0; i < 10; i++) s += 'for(let i =0;i<1000;i++)';
s += 'console.log(i)';
eval(s);
