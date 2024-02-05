class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

/*
// FIFO
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // O(n)
  peek() {
    console.log(`Peeking at the first node`)
    console.log(this.first)
    return this.first
  }

  // O(1)
  enqueue(value) {
    const newNode = new Node(value)
    if (this.isEmpty()) {
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
  dequeue() {
    let removingNode =  this.first
    if (this.isEmpty()) {
      console.log(`Queue is empty`)
      return null
    } else if (this.length === 1){
      this.first = null;
      this.last = null;
      this.length--
      console.log(`Dequeued queue of length 1`)
      console.log(this)
      return this
    } else {
      console.log(`Dequeuing the removingNode:`)
      console.log(removingNode)
      this.first = this.first.next
      this.length--
      removingNode = null
      console.log(this)
      return this
    }
    
  }

  // O(1)
  isEmpty() {
    console.log(this.length === 0)
    return this.length === 0;
  }

}

*/

// Queues using array
class Queue {
  constructor() {
    this.array = []
  }

  // Peek O(1)
  peek() {
    console.log(`Peeking at the first item: ${this.array[0]}`)
    return this.array[0]
  }

  // Enqueue O(n)
  enqueue(value) {
    this.array.push(value)
    console.log(`Enqueuing value ${value} into this.array:`)
    console.log(this.array)
    return this
  }

  // Dequeue O(n)
  dequeue() {
    console.log(`Dequeueing value ${this.array[0]}`)
    this.array.shift()
    console.log(this.array)
    return this
  }
  // isEmpty O(1)
  isEmpty() {
    console.log(this.array.length === 0)
    return this.array.length === 0
  }
}

const myQueue = new Queue()
myQueue.enqueue(10)
myQueue.enqueue(2)
myQueue.enqueue(20)
myQueue.peek()
myQueue.dequeue()
myQueue.peek()
myQueue.dequeue()
myQueue.peek()
myQueue.dequeue()
myQueue.peek()
myQueue.dequeue()
myQueue.peek()
myQueue.isEmpty()
