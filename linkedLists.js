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

  // Print List of linkedList values
  printList() {
    const linkedListValues = []
    let pointer = 0
    let currentNode = this.head
    while (pointer < this.length) {
      linkedListValues.push(currentNode.value)
      currentNode = currentNode.next
      pointer++
    }
    console.log('Printed array of SinglyLinkedList values:')
    console.log(linkedListValues)
    return linkedListValues
  }

  // Methods to create from scratch:
  // Look up / Traverse to Index
  traverseToIndex(index) {
    /* TODO: error handling check valid index value */
    // Set currentNode value
    let currentNode = this.head
    // Set pointerIndex value to start
    let pointerIndex = 0

    // Edge cases:
    if (index === pointerIndex) return this.head
    if (index >= this.length) return this.tail

    while (pointerIndex !== index) {
      currentNode = currentNode.next
      pointerIndex++
    }
    
    console.log(`TraverseToIndex(${index}) currentNode:`)
    console.log(currentNode)
    return currentNode
      
  }

  // Add to beginning: Time Complexity O(1)
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
    console.log(`Prepend(${value}):`)
    console.log(this)
    return this
  }

  // Add to end: Time Complexity O(1)
  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    console.log(`Append(${value}):`)
    console.log(this)
    return this
  }

  // Insert in middle somewhere
  insert(index, value) {
    // if index = 0, insert new node at head
    if (index === 0) {
      console.log('prepended value')
      console.log(this)
      return this.prepend(value)
    }
    // if index >= this.length, insert new node at tail
    if (index >= this.length) {
      console.log('appended value')
      console.log(this)
      return this.append(value)
    }

    // Create new node to be inserted
    const newNode = new Node(value)
    
    // Grab previousNode to where node is being inserted
    // to change its next value to our newNode
    const previousNode = this.traverseToIndex(index-1)
    // Grab value of node being pushed forward to provide 
    // as newNode's next value
    const pointer = previousNode.next

    console.log('Insert at pointer')
    console.log(pointer)
    // Update our newNode's next value to the pointerNode
    // at the given index
    newNode.next = pointer
    // Update the previous node's next value to our newNode
    previousNode.next = newNode
    // Increment length of SinglyLinkedList
    this.length++

    console.log(`inserted ${value} at index: ${index}`)
    console.log(this)
    console.log(`newNode:`)
    console.log(newNode)

    return this

  }

  // Delete
  remove(index) {
    if (this.length === 1) {
      this.head.value = null
      this.length--
      console.log(`removed node at index ${index}`)
      console.log(this)
      return this
    }
    // Remove first index
    if (index === 0) {
      // Change head to head.next
      this.head = this.head.next
      this.length--
      console.log(`removed node at index 0 ${index}`)
      console.log(this)
      return this
    }
    let previousNode
    // Remove last index
    if (index >= this.length) {
      previousNode = this.traverseToIndex(this.length-2)
      previousNode.next = null
      this.tail = previousNode
      this.length--
      console.log(`removed node at index end ${index}`)
      console.log(this)
      return this
    }
    previousNode = this.traverseToIndex(index-1)
    let nextNode = this.traverseToIndex(index).next
    previousNode.next = nextNode
    this.length--
    console.log(`removed node at index: ${index}`)
    console.log(this)
    return this

  }

  reverse() {
    // if length of 1 just return the LL
    if (this.length === 1) {
      return this
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null
    this.head = first
    console.log(`Reversed this LL:`)
    console.log(this)
    return this
  }

}

const mySinglyLL = new SinglyLinkedList(10)
mySinglyLL.append(5)
mySinglyLL.append(16)
mySinglyLL.prepend(1)
// mySinglyLL.traverseToIndex(0)
// mySinglyLL.traverseToIndex(10)
// mySinglyLL.traverseToIndex(2)

mySinglyLL.insert(0, 99)
mySinglyLL.printList()
mySinglyLL.remove(1)
mySinglyLL.printList()
mySinglyLL.reverse()

mySinglyLL.printList()
console.log(mySinglyLL)

