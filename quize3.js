//? 3. Write a code to implement search on array items and returns the answers in an array
//? hint: the search is only based on the first letters of the word
// Example:
const brands = [
  'dell',
  'hp',
  'asus',
  'lenovo',
  'apple',
  'acer',
  'samsung',
  'sony',
];

function brandsSearch(arr, query) {
  return arr.filter((element)=>{
    return element.slice(0,2)===query
  })
}

console.log(brandsSearch(brands, 'le')); // result : [ 'lenovo' ]
console.log(brandsSearch(brands, 'sa')); // result : [ 'samsung' ]
