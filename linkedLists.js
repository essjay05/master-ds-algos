class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  // Methods to create from scratch:
  // Look up
  search() {

  }

  // Add to beginning: Time Complexity O(1)
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
    console.log(this)
    return this
  }

  // Add to end: Time Complexity O(1)
  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    console.log(this)
    return this
  }

  // Insert in middle somewhere
  insert(index, value) {
    let pointerIndex = 0
    let pointer = this.head
    let previousNode = index - 1
    let nextNode
    
    const newNode = new Node(value)
    for (let i = 0; i <= index; i++) {
      if (pointerIndex === index) {
        nextNode = pointer.next
        pointer = newNode
      }
    }
    if (this.head.value )

  }

  // Delete
  delete() {

  }


}

const mySinglyLL = new SinglyLinkedList(10)
mySinglyLL.append(5)
mySinglyLL.append(16)
mySinglyLL.prepend(1)
mySinglyLL.insert(2, 99)
// console.log(mySinglyLL)