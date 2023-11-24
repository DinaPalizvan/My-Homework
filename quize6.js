//? 6. write a reduce method to get the sum of all array items

//! Answer:
const arr = [31, 1, 7, 12, 27];
const sum= arr.reduce((total,element)=>total+element,0)
console.log(sum);
