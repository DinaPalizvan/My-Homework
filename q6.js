// ? 6. We have an object called 'user'.
// Write the destructuring assignment that converts:
// todo1 : 'name' property into the variable 'firstName'.
// todo2 : 'years' property into the variable 'age'.
// todo3 : 'admin' property into the variable 'isAdmin'.(if no such property exists create 'isAdmin' variable and assign false value to that)

let user = { name: 'John', years: 30 };

// console.log(firstName); // John
// console.log(age); // 30
// console.log(isAdmin); // false

// ! Answer
user.isAdmin=false
const{name:firstName, years: age, isAdmin}=user
console.log(user);
console.log(firstName); // John
console.log(age); // 30
console.log(isAdmin); // false