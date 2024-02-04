class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

// FIFO
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // O(n)
  peek(value) {

  }

  // O(1)
  enqueue(value) {

  }

  // O(1)
  dequeue(value) {

  }

  // O(1)
  isEmpty() {

  }

}

const myQueue = new Queue(10)