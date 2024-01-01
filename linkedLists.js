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

  // Add to beginning
  prepend() {

  }

  // Add to end
  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    console.log(this)
    return this
  }

  // Insert in middle somewhere
  insert() {

  }

  // Delete
  delete() {

  }


}

const mySinglyLL = new SinglyLinkedList(10)
mySinglyLL.append(5)
// console.log(mySinglyLL)