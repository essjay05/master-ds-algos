// Given an array find the first character that occurs more than once

// Example 1:
  const array1 = [2,5,1,2,3,5,1,2,4]
  // Should return 2

// Example 2:
  const array2 = [2,1,1,2,3,5,1,2,4]
  // Should return 1

// Example 3:
  const array3 = [2,3,4,5]
  // Should return undefined

// Efficient solution: O(n) time complexity
const findFirstRecurringChar = (array) => {
  // Create hash to hold counts of characters
  const hash = {}

  // Loop through array
  for (let char of array) {
    // Check if char does not occur in hash
    if (!hash[char]) {
      // If does not, give create char as key and
      // give an an initial value of 1
      hash[char] = 1
    } else {
      hash[char]++
      console.log(`${char} is the first recurring char`)
      return char
    }
  }
  
  // If no character is recurrying return undefined
  console.log(undefined)
  return undefined
}

// Alternative (inefficient) solution: O(n)^2
// *NOTE: this solution gives a different solution (depending)
  // on the order of characters within the array (ie example: array2) 
const findFirstRecurringChar2 = (arr) => {
  // Loop through array and check current index value
  // against remaining values in array
    // (Embedded loops)
  let firstRecurringValue = undefined

  // Outer Loop through array:
  for (let i = 0; i <= arr.length; i++) {
    // Inner Loop comparing i index value to j index values
    // starts at 1 since i starts at 0
    
    for (let j = i+1; j <= arr.length; j++) {
      // compare arr[i] to arr[j] values
      if (arr[i] === arr[j]) {
        console.log(`Found first recurring char: ${arr[i]}`)
        firstRecurringValue = arr[i]
        return firstRecurringValue
      }
    }
  }

  console.log(`No recurring characters found`)
  return firstRecurringValue
  
}

// Test cases for first solution:
findFirstRecurringChar(array1)
findFirstRecurringChar(array2)
findFirstRecurringChar(array3)

// Test cases for second solution:
findFirstRecurringChar2(array1)
findFirstRecurringChar2(array2)
findFirstRecurringChar2(array3)
