/*
Create a calculator that performs four basic operations.
The styling should be something like calculator.png
*/

//===============selecting=================
const operations=document.querySelectorAll("#operation")
const numbers=document.querySelectorAll("#num")
const monitor=document.querySelector("#monitor");
const clear=document.querySelector(".clear");
const equal=document.querySelector(".equal")
//=========================================
let numOne="";
let input="";
let operator="";
//=================click on numbers==================
numbers.forEach((num)=>{
    num.addEventListener("click", ()=>{
        input +=num.textContent; 
        monitor.value=input
    })
})
//=================click on operations=================
operations.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        operator=btn.textContent;
        console.log(operator);
        numOne=input;
        console.log(numOne);
        input=""
    })
})
//=================main function=======================
const calculate=(num1, operator, num2)=>{
    switch (operator){
        case "+":
            return Number(num1) + Number(num2);
        case "-":
            return num1 - num2;
        case "x":
            return num1*num2;
        case "/":
            return num2 !=0 ? num1/ num2 : "Can't divide by zero";
        default:
            return "Invalid result"
    }
}
//================click on equal btn=====================
equal.addEventListener("click", ()=>{
    const numTwo= input;
    console.log(numTwo);
    const result= calculate(numOne, operator, numTwo)
    monitor.value=result;
    numOne=result;
    operator="";
    input=""
})
//==============click on clear btn========================
clear.addEventListener("click", ()=>{
    input="";
    numOne="";
    operator="";
    monitor.value="0"
})
