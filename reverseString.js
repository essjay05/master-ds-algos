// Create a function that reverses a string
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

const reverseStr = (str) => {
  const reversed = str.split('').reverse().join('')
  return reversed
}

const string = 'asdf!'

console.log(reverseStr(string))