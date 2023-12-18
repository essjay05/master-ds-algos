class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  // Retrieve item at array index provided | Time complexity: O(1)
  get(index) {
    return this.data[index]
  }

  // Add item value to end of array | Time complexity: O(1)
  push(item) {
    this.data[this.length] = item
    this.length++
    return this.length
  }

  // Remove/delete item value from end of array | Time complexity: O(1)
  pop() {
    const lastItem = this.data[this.length-1]
    delete this.data[this.length-1]
    this.length--
    return lastItem
  }

  // Delete item from index value of array | Time complexity: O(n) requires shiftItems (loop)
  delete(index) {
    const deletedItem = this.data[index]
    this.shiftItems(index)
    return deletedItem
  }

  // Shift items method | Time complexity: O(n) requires loop
  shiftItems(index) {
    // loop from starting index to end of array
    for (let i = index; i < this.length - 1; i++) {
      // Move data from [i+1] value into [i]
      this.data[i] = this.data[i+1]
    }
    // Delete last item
    delete this.data[this.length-1]
    // Subtract length of array by 1
    this.length--
  }
}

const newArray = new MyArray()
newArray.push('hi')
console.log(newArray)
newArray.push('hello')
console.log(newArray)
newArray.push('aloha')
console.log(newArray)
newArray.push('hola')
console.log(newArray)
newArray.push('bonjour')
console.log(newArray)
console.log(newArray.get(4))
console.log(newArray)
newArray.pop()
console.log(newArray)
console.log(newArray.delete(2))
console.log(newArray)
