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

// findFirstRecurringChar(array1)
findFirstRecurringChar(array2)
