// Create a function that reverses a string
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

const reverseStr = (str) => {

  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Not applicable to provided str'
  }
  // Solution 1:
  // const reversed = str.split('').reverse().join('')
  // return reversed

  // // Solution 2:
  // let reversed = []
  // for (let s of str) {
  //   // console.log(s)
  //   reversed = (s + reversed)
  // }
  // return reversed

  // Solution 3:
  const reversed = []
  const totalItems = str.length - 1
  for (let i = totalItems; i = 0; i--) {
    reversed.push(str[i])
  }
  console.log(reversed)

  // console.log(reversed.join(''))
  return reversed.join('')

}

const string = 'asdf!'

console.log(reverseStr(string))