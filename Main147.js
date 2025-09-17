class MinHeap {
  constructor() {
    this.heap = [];
  }
  getParent(i) { return Math.floor((i - 1) / 2); }
  getLeft(i) { return 2 * i + 1; }
  getRight(i) { return 2 * i + 2; }
  insert(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0 && this.heap[this.getParent(i)] > this.heap[i]) {
      [this.heap[i], this.heap[this.getParent(i)]] = [this.heap[this.getParent(i)], this.heap[i]];
      i = this.getParent(i);
    }
  }
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    let root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapify(0);
    return root;
  }
  heapify(i) {
    let l = this.getLeft(i), r = this.getRight(i), smallest = i;
    if (l < this.heap.length && this.heap[l] < this.heap[smallest]) smallest = l;
    if (r < this.heap.length && this.heap[r] < this.heap[smallest]) smallest = r;
    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this.heapify(smallest);
    }
  }
}
let h = new MinHeap();
[5,3,8,1,2].forEach(v => h.insert(v));
console.log(h.extractMin(), h.extractMin(), h.heap);
