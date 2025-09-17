class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  get(key) {
    if (!this.map.has(key)) return -1;
    let node = this.map.get(key);
    this.remove(node);
    this.insert(node);
    return node.val;
  }
  put(key, val) {
    if (this.map.has(key)) this.remove(this.map.get(key));
    if (this.map.size === this.capacity) this.remove(this.head.next);
    this.insert(new Node(key, val));
  }
  remove(node) {
    this.map.delete(node.key);
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  insert(node) {
    this.map.set(node.key, node);
    node.next = this.tail;
    node.prev = this.tail.prev;
    this.tail.prev.next = node;
    this.tail.prev = node;
  }
}
let cache = new LRUCache(2);
cache.put(1, 1); cache.put(2, 2);
console.log(cache.get(1));
cache.put(3, 3);
console.log(cache.get(2));
