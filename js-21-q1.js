// ? Question-1:follow these steps:
//todo-1:Write a function called "calculate" that takes 4 parameters.
//todo-2:The first and seconde parameters should be numbers.
//todo-3:The third parameter should be a string indicating either "add => addition" or "multiply => multiplication".
//todo-4:The fourth parameter should be a function that log the result of the calculation.

const calculate=(num1, num2, opp, func)=>{
    if(opp==="add"){
        func(num1+num2)
    }else if(opp==="multiply"){
        func(num1*num2)
    }
}
const handleCalculationResult=(result)=>{
    console.log(`the result is ${result}`);
}

calculate(5, 3, "add", handleCalculationResult);
calculate(4, 6, "multiply", handleCalculationResult);
