class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }
  
  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
      console.log(hash)
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
    if (currentBucket.length) {

    }
    return undefined
  }
}

const myHashTable = new HashTable(2)
// myHashTable._hash('1232')
myHashTable.set('grapess', 10000)
myHashTable.set('apples', 35)
myHashTable.set('oranges', 2)
myHashTable.set('pears', 2)
myHashTable.get('pears')
