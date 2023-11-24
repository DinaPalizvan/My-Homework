//? 7. Write a function to:
// todo1: find every item with more than 6 characters
// todo2: then check, if all of them have less than 10 characters return true, otherwise return false

//!  Answer:
const array = ['hello Jo', 'fish', 'birmingham', 'periodic table', 'phone'];
const find=arr=>{
    const bigWords= arr.filter((element)=>element.length>6);
    console.log(bigWords);
    return bigWords.every((element)=>element.length<10)
}
console.log(find(array));



