/*
  Array methods - .join()
  -------------------------
  Complete the capitalize function 
  It should return a string with the first letter in uppercase
  For example, capitalize("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalize(str) {
  const letters=str.split("")
  letters[0]=letters[0].toUpperCase()
  return letters.join("")
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let sampleName = 'benyamin';

console.log(capitalize(sampleName));
console.log(capitalize('hello'));

/* 
  EXPECTED RESULT
  ---------------
  Benyamin
  Hello
*/
