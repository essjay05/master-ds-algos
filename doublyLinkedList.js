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

  // Add to front of DLL: O(1)
  prepend(value) {
   
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

  }

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
// myDoublyLL.append(16)
// myDoublyLL.prepend(1)
// myDoublyLL.traverseToIndex(0)
// myDoublyLL.traverseToIndex(10)
// myDoublyLL.traverseToIndex(2)

// myDoublyLL.insert(0, 99)
// myDoublyLL.printList()
// myDoublyLL.remove(1)
// myDoublyLL.printList()

// console.log(myDoublyLL)