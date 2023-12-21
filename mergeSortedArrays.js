const arr1 = [4,8,31]
const arr2 = [4,6,11,20,30]

const findLesserVal = (val1, val2) => !val2 || val1 < val2 ? true : false

const mergeSortedArrays = (array1, array2) => {
  // Create mergedArray
  const mergedArray = []
  // Create variables for arrayItems
  let array1Item = array1[0]
  let array2Item = array2[0]

  // Create initial pointers
  let pointer1 = 1
  let pointer2 = 1

  
  // Check that there are 2 inputs and that each is an array
  if (!array1 || !array2 || !Array.isArray(array1) || !Array.isArray(array2) ) {
    return('Input(s) are not valid.')
  }
  // Check if either array is empty
  if (array1.length === 0) {
    return array2
  } else if (array2.length === 0) {
    return array1
  }

  // console.log(Array.isArray(array2))
  
  // While Loop through both arrays and checking one number at a time
  while (array1Item || array2Item ) {
    if (findLesserVal(array1Item, array2Item)) {
      mergedArray.push(array1Item)
      array1Item = array1[pointer1]
      pointer1++
    } else {
      mergedArray.push(array2Item)
      array2Item = array2[pointer2]
      pointer2++
    } 
  }

  return mergedArray
}
  



console.log(mergeSortedArrays(arr1,arr2))