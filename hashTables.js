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
      this.data[address].push([key, value])
      console.log(this.data)
    }

  }
}

const myHashTable = new HashTable(50)
// myHashTable._hash('1232')
myHashTable.set('grapes', 10000)