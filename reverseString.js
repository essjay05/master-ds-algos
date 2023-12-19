// Create a function that reverses a string
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

const reverseStr = (str) => {
  // Solution 1:
  // const reversed = str.split('').reverse().join('')
  // return reversed

  // Solution 2:
  let reversed = []
  for (let s of str) {
    // console.log(s)
    reversed = (s + reversed)
  }
  return reversed

}

const string = 'asdf!'

console.log(reverseStr(string))