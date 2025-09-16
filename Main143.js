class MinHeap {
  constructor() {
    this.heap = [];
  }
  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent] <= this.heap[idx]) break;
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }
  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }
  sinkDown(idx) {
    let left = 2 * idx + 1, right = 2 * idx + 2, smallest = idx;
    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
    if (smallest !== idx) {
      [this.heap[smallest], this.heap[idx]] = [this.heap[idx], this.heap[smallest]];
      this.sinkDown(smallest);
    }
  }
}
let pq = new MinHeap();
[5, 3, 8, 1, 2].forEach(n => pq.insert(n));
console.log(pq.extractMin());
console.log(pq.extractMin());
