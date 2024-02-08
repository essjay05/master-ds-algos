class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}
/*
// LIFO
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  
  // O(n)
  lookup(value) {

  }

  // O(1) (Add to top)
  push(value) {
    const newNode = new Node(value)
    // Edge case if stack is empty
    if (this.isEmpty()) {
      this.top = newNode
      this.bottom = newNode
      console.log(`Added first to stack`)
    } else {
      newNode.next = this.top
      this.top = newNode
    }
      this.length++
      console.log(`Pushed new value: ${value}`)
      console.log(newNode)
      console.log(this)
      return this
  }

  // O(1) (Remove from top)
  pop() {
    if (this.length === 0 || this.isEmpty()) {
      console.log(`This stack is empty`)
      return
    }
    if (!this.top.next) {
      this.top = null;
      this.bottom = null;
      this.length--
      console.log('Decreased 1 to 0 stack')
      console.log(this)
      return this
    }
    if (this.top.next) {
      const newTop = this.top.next
      let removingNode = this.top
      removingNode = null
      this.top = newTop
      this.length--
      console.log(`Removed the top.`)
      console.log(this)
      return this
    }

  }

  // O(1) (See what's on top)
  peek() {
    console.log('Peeking at the top :')
    console.log(this.top)
    return this.top
  }

  isEmpty() {
    if (!this.top || !this.bottom || this.length === 0) {
      console.log(`This stack is empty`)
      console.log(this)
      return true
    }
    console.log(`This stack is NOT empty.`)
    console.log(this)
    return false
  }
}

*/

// Stacks using array
export class Stack {
  constructor() {
    this.array = []
  }

  peek() {
    console.log(`Peek this.array:`)
    console.log(this.array)
    console.log(`this.array[this.array.length-1]: ${this.array[this.array.length-1]}`)
    return this.array[this.array.length-1]
  }

  push(value) {
    this.array.push(value)
    console.log(`Push ${value} into this.array:`)
    console.log(this.array)
    return this.array
  }

  pop() {
    const removedVal = this.array.pop()
    console.log(`Removed value: ${removedVal}`)
    console.log(this.array)
  }

  isEmpty() {
    console.log(`this.array.length === 0 : ${this.array.length === 0}`)
    return this.array.length === 0
  }
}

// 
const myStack = new Stack()
myStack.isEmpty()
myStack.peek()
myStack.push(10)
myStack.push(2)
myStack.push('test string')
myStack.pop()
myStack.pop()
myStack.isEmpty()
myStack.peek()
myStack.pop()
myStack.isEmpty()
