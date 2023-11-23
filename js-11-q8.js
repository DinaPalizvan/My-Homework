// ? Question-8:This function is to get a string and reverse it; convert this function to an arrow function.
// ?(If you don't know what the reverse, join, or split methods are, go to the MDN website and look them up.)
const reverseString = function (str) {
  return str.split("").reverse().join("");
};
// !Answer:
const reverseString2=str=>str.split("").reverse().join("")
// console.log(reverseString2('Dina'));