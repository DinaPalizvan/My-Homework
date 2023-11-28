// ? 8. Use Array Destructuring to get all of the names from this Nested Array
// hint: Search about destructuring nested arrays.

const moreStudents = ['Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam']];

//! Answer :
const [name1, [name2, name3], [name4, name5]]=moreStudents
console.log(name1, name2, name3, name4, name5);