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
    const newNode = new Node(value)
    if (this.length === 0) {
      this.first = newNode
    } else if (this.length === 1) {
      this.first.next = newNode
    } else {
      this.last.next = newNode
    }
    this.last = newNode
    this.length++
    console.log(`Enqueued newNode value: ${newNode}`)
    console.log(this)
    return this
  }

  // O(1)
  dequeue(value) {

  }

  // O(1)
  isEmpty() {
    console.log(this.length === 0)
    return this.length === 0;
  }

}

const myQueue = new Queue()
myQueue.enqueue(10)
myQueue.enqueue(2)
myQueue.enqueue(20)
myQueue.isEmpty()