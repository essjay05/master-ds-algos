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

  // Traverse to Index
  traverseToIndex(index) {
    
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
    // if index = 0, insert new node at head
    if (index === 0) {
      this.prepend(value)
      console.log(this)
      return this
    }
    // if index >= this.length, insert new node at tail
    if (index >= this.length) {
      return this.append(value)
    }

    const newNode = new Node(value)

    // let currentNodeIndex = 0
    // let currentNode = this.head
    // let previousNodeIndex = index - 1
    // let nextNode
    
    // for (let i = 0; i <= index; i++) {
    //   if (currentNodeIndex === previousNodeIndex) {
        
    //     nextNode = currentNode.next
    //     currentNode = newNode
    //   }
    // }
    // if (this.head.value )

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