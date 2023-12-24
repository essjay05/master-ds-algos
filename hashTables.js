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
    if (currentBucket) {
      // for(let i = 0; i < currentBucket.length; i++) {
      //   if (currentBucket[i][0] === key) {
      //     // console.log(`(${currentBucket[i][0]}: ${currentBucket[i][1]})`)
      //     return currentBucket[i][1]
      //   }
      // }
      
      for (let c of currentBucket) {
        if (c[0]) {
          console.log(c[1])
          return c[1]
        }
      }
    }
    return undefined
  }

  keys() {
    const keysArray = []
    let keyValue
 
    for (let d of this.data) {
      if (d) {
        keyValue = d[0][0]
        keysArray.push(keyValue)
      }
    }
    
    console.log(keysArray)
    return keysArray
  }

  values() {
    const valsArray = []
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        valsArray.push(this.data[i][0][1])
      }
    }
    console.log(valsArray)
    return valsArray
  }
}

const myHashTable = new HashTable(50)
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 35)
myHashTable.set('oranges', 2)
myHashTable.set('pears', 2)

myHashTable.get('apples')
myHashTable.keys()
myHashTable.values()
