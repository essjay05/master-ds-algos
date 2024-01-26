class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

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
      this.length++
      console.log(`Added first to stack`)
      console.log(newNode)
      console.log(this)
      return this
    }
  }

  // O(1) (Remove from top)
  pop() {

  }

  // O(1) (See what's on top)
  peek() {

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

const myStack = new Stack()
myStack.push(5)
myStack.isEmpty()
