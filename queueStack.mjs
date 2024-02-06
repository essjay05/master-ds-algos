import { Stack } from "./stacks.mjs";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueStack {
  constructor() {
    const newQueueStack = new Stack()
    console.log(`NewQueueStack:`)
    console.log(newQueueStack)
    return newQueueStack
  }

  enqueue() {

  }

  dequeue() {

  }

  peek() {

  }

  isEmpty() {

  }
}

const myQueueStack = new QueueStack()

console.log(myQueueStack)