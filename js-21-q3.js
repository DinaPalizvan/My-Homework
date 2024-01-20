// ? Question-3: Write a function that simulates the filter function using a callback function:
// todo-1: Your function should take an array and a callback function as arguments.
// todo-2: It should return the result of filtering based on the callback.
// todo-3: In the callback function, check if the number is greater than 2.

const numbers = [1, 2, 3, 4, 5];
//first way:
const callback=arr=>{
    return arr.filter(e=>e>2)
}
const simulateFilter=(arr, fn)=>{
    return fn(arr)
}
const evenNumbers = simulateFilter(numbers, callback);
console.log("first answer" ,evenNumbers); //>>> [3, 4, 5]
//second way:
const simulateFilter2=(arr, fn)=>{
    const result=[]
    arr.forEach(element => {
       if(fn(element)){
        result.push(element)
       } 
    });
    return result
}
const callback2=(num)=>{
    return num>2
}
console.log("second answer",simulateFilter2(numbers, callback2));



