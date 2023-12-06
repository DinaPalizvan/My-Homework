// * ===================================5====================================
// ********** check ***************

/*
 ? look at the code below:
 todo: 1. modify the missingLetters, put missing letters between b and f in it 
 todo: 2. modify arr, by using "spread operator" make a copy of 'missingLetters' inside arr and console.log() the arr
 todo: 3. result should be like this ["a", "b", "c", "d", "e", "f", "g"]
*/

const missingLetters = [];
const arr = ['a', 'b', 'f', 'g'];


missingLetters.push('c', 'd', 'e')
arr.splice(2,0,...missingLetters)
console.log(arr);
