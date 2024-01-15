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