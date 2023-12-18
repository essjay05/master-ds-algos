class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  // Retrieve item at array index provided
  get(index) {
    return this.data[index]
  }

  // Add item value to end of array
  push(item) {
    this.data[this.length] = item
    this.length++
    return this.length
  }

  // Remove/delete item value from end of array
  pop() {
    const lastItem = this.data[this.length-1]
    delete this.data[this.length-1]
    this.length--
    return lastItem
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
newArray.pop()
newArray.pop()
console.log(newArray)
