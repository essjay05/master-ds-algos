class Node {
  constructor(value) {
    this.value = value,
    this.prev = null,
    this.next = null
  }
}

// Doubly Linked List
// Benefit of being able to traverse list
// backwards or forwards
// Con: takes up a little more memory because
// you have to hold memory for nodes' previous
// to the node as well as next
class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      prev: null,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  // Print List of linkedList values
  printList() {
    const doublyLLValues = []
    let pointer = 0
    let currentNode = this.head
    while (pointer < this.length) {
      doublyLLValues.push(currentNode.value)
      currentNode = currentNode.next
      pointer++
    }
    console.log('Printed array of SinglyLinkedList values:')
    console.log(doublyLLValues)
    return doublyLLValues
  }

  // Add to front of DLL: O(1)
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
    this.length++
    console.log(`Prepended value: ${value}`)
    console.log(this)
    return this
  }

  // Add to end of DLL: O(1)
  append(value) {
    const newNode = new Node(value)
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    console.log(`Appended new value.`)
    console.log(`New appended node:`)
    console.log(newNode)
    console.log(this)
    return this
  }

  // Lookup value: O(n)
  lookup(index) {
    // Determine whether to check from front of LL or end of LL
    let nodeLocation = this.length - index
    let pointer
    let pointerIndex
    if (index >= this.length || index < 0) {
      console.log(`Index: ${index}`)
      console.log(`Node doesn't exist`)
      return
    }
    if (nodeLocation >= this.length / 2) {
      // traverse from end
      pointer = this.tail
      pointerIndex = this.length-1
      while (pointerIndex !== index) {
        pointer = pointer.prev
        pointerIndex--
      }
      console.log(`Node at ${index} is:`)
      console.log(pointer)
      return pointer
    } else {
      // traverse from front
      pointer = this.head
      pointerIndex = 0
      while (pointerIndex !== index) {
        pointer = pointer.next
        pointerIndex++
      }
      console.log(`Node at ${index} is:`)
      console.log(pointer)
      return pointer
    }
  }

  // Traverse from end
  // traverseFromEnd(index) {
  //   let pointer = this.tail

  //   while
  // }

  // Traverse from front


  // Insert value at index: O(n)
  insert(index, value) {

  }

  // Remove value at index: O(n)
  remove(index) {

  }
}

const myDoublyLL = new DoublyLinkedList(10)
myDoublyLL.append(5)
myDoublyLL.append(16)
myDoublyLL.prepend(1)
myDoublyLL.lookup(10)
// myDoublyLL.traverseToIndex(0)
// myDoublyLL.traverseToIndex(10)
// myDoublyLL.traverseToIndex(2)

// myDoublyLL.insert(0, 99)
myDoublyLL.printList()
// myDoublyLL.remove(1)
// myDoublyLL.printList()

// console.log(myDoublyLL)