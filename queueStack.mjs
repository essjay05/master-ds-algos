import { Stack } from "./stacks.mjs";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// FIFO
class QueueStack {
  constructor() {
    this.stack = new Stack()
    console.log(`NewQueueStack:`)
    console.log(this.stack)
    console.log('This is:')
    console.log(this)
  }

  enqueue(value) {
    this.stack.unshift(value)
    console.log(`Enqueued value: ${value}`)
    console.log(this)
    return this
  }

  dequeue() {
    const removedValue = this.stack.pop()
    console.log(`Removed value: ${removedValue}`)
    console.log(this)
    return this
  }

  peek() {

  }

  // isEmpty() {

  // }
}

const myQueueStack = new QueueStack()
myQueueStack.enqueue('Joy')
myQueueStack.enqueue('Kat')
myQueueStack.enqueue('Max')
myQueueStack.enqueue('Glenn')
myQueueStack.enqueue('Biggie')
myQueueStack.dequeue()
console.log(myQueueStack)
