// create a constructor function named "Accumulator," taking "startingValue" as a parameter.

// The created object should:

// Keep the starting value in the "value" property.
// Include a "read()" method that uses the "prompt" function to get a number from the user and adds it to the starting value. Essentially, the "value" property represents the total of all user-input values, starting from "startingValue."
//////////Answer!!!!!!!///////////

function Accumulator(startingValue){
    this.value= startingValue;
    this.read=function(){
        let num= prompt("enter a number here:")
        this.value+= Number(num)
    }
}
let accumulator = new Accumulator(0);
accumulator.read();
accumulator.read();
console.log(accumulator.value);