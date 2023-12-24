class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }
  
  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }

    return hash
  }

  set(key, value) {
    let address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = []  
    }
    this.data[address].push([key, value])
    return this.data
  }

  get(key) {
    let address = this._hash(key)
    const currentBucket = this.data[address]
    console.log(currentBucket)
    if (currentBucket) {
      for(let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          console.log(`(${currentBucket[i][0]}: ${currentBucket[i][1]})`)
          return currentBucket[i][1]
        }
      }
    }
    return undefined
  }

  keys() {

  }
}

const myHashTable = new HashTable(50)
myHashTable.set('grapess', 10000)
myHashTable.set('apples', 35)
myHashTable.set('oranges', 2)
myHashTable.set('pears', 2)
myHashTable.get('apples')
