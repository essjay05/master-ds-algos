import { Stack } from "./stacks.mjs";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueStack {
  constructor() {
    this.stack = new Stack()
    console.log(`NewQueueStack:`)
    console.log(this.stack)
    console.log('This is:')
    console.log(this)
  }

  enqueue(value) {
    console.log(`Enqueued value: ${value}`)
    console.log(this)
    return this
  }

  // dequeue() {

  // }

  // peek() {

  // }

  // isEmpty() {

  // }
}

const myQueueStack = new QueueStack()
myQueueStack.enqueue('Joy')
console.log(myQueueStack)
