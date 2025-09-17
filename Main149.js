class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }
  remove(val) {
    let curr = this.head;
    while (curr) {
      if (curr.val === val) {
        if (curr.prev) curr.prev.next = curr.next;
        else this.head = curr.next;
        if (curr.next) curr.next.prev = curr.prev;
        else this.tail = curr.prev;
        break;
      }
      curr = curr.next;
    }
  }
  print() {
    let arr = [], curr = this.head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    console.log(arr);
  }
}
let list = new DoublyLinkedList();
list.append(10); list.append(20); list.append(30); list.remove(20); list.print();
