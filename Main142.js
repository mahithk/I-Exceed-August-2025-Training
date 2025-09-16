class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(val, node = this.root) {
    if (!this.root) return this.root = new Node(val);
    if (val < node.val) {
      if (!node.left) node.left = new Node(val);
      else this.insert(val, node.left);
    } else {
      if (!node.right) node.right = new Node(val);
      else this.insert(val, node.right);
    }
  }
  search(val, node = this.root) {
    if (!node) return false;
    if (node.val === val) return true;
    return val < node.val ? this.search(val, node.left) : this.search(val, node.right);
  }
  inorder(node = this.root, res = []) {
    if (!node) return res;
    this.inorder(node.left, res);
    res.push(node.val);
    this.inorder(node.right, res);
    return res;
  }
}
let bst = new BST();
[10, 5, 15, 3, 7, 20].forEach(n => bst.insert(n));
console.log(bst.search(7));
console.log(bst.inorder());
