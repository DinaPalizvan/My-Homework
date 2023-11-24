// ? 8. Write a function to calculate the average of array items using reduce

//! Answer:

const arr1 = [3, 5, 7, 2];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [11, 3, 1];

function average(arr) {
  const total= arr.reduce((total,element)=>total+element);
  return total/arr.length
}

console.log(average(arr1)); // result: 4.25
console.log(average(arr2)); // result: 3
console.log(average(arr3)); // result: 5
