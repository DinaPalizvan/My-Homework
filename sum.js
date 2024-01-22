/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/
 
let num1=prompt("enter a number.")
let num2=prompt("enter another number.")

const sum=(num1, num2)=>{
  return new Promise((resolve, reject)=>{
    if(num1>0 && num2>0){
      setTimeout(()=>{
        resolve(`the result is ${Number(num1)+ Number(num2)}`)
      },500)
    }else{
      reject("your numbers should be grater than 0.")
    }
  })
}
sum(num1, num2)
.then((data)=>{
  alert(data)
})
.catch((error)=>{
  alert(error)
})
