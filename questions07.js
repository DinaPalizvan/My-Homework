/** @format */

// ? Question-1:write a function to give this array and split negative numbers and positive numbers.
const numbers = [-2, 5, 6, -8, 3, -1, 0, 4, -7];

// !Answer:
let positiveNumbers=[]
let negativeNumbers=[]
let zero=[]

function split(numbers){
    for(let i=0; i<numbers.length; i++){
        if (numbers[i]>0) {
            positiveNumbers.push(numbers[i])
        }else if (numbers[i]<0) {
            negativeNumbers.push(numbers[i])
        }else{
            zero.push(numbers[i])
        }
    }
}
split(numbers)
console.log(positiveNumbers);
console.log(negativeNumbers);
console.log(zero);







// ? Question-2:write a function to find the biggest number in this  array and push to a new array
const findBigNumber = [5, 2, -10, 50, 35];

// !Answer 1:
let biggestNum=[-Infinity]
function find(findBigNumber) {
    for (let i = 0; i < findBigNumber.length; i++) {
        if (findBigNumber[i]>biggestNum) {
            biggestNum[0]=findBigNumber[i]
        }
    }
}
find(findBigNumber)
console.log(biggestNum)

//Answer 2:
let greatestNum=[]
function big(sort){
    let sortedArr=sort.sort((a, b) => a - b)
    greatestNum.push(sortedArr[sortedArr.length-1])
}
big(findBigNumber)
console.log(greatestNum);







// ? Question-3:write a function to remove all the items which are not number from the array and show a new array.
const notNumberArray = ["1", 1, "100", 100, "-9", 2, 96, -22, "", true, null];

// !Answer:
let allNumbers=[]
function arr(notNumberArray){
    for (let i = 0; i < notNumberArray.length; i++) {
        if (typeof notNumberArray[i]==="number") {
            allNumbers.push(notNumberArray[i])
        }
    }
}
arr(notNumberArray)
console.log(allNumbers);






// ? Question-4:Consider the array that you created from the previous question (Q-3) and write a function to calculate the sum of all its numbers.
// todo1: Consider the array that you created from the previous question (Q-3)
// todo2: write a function that first convert array of string to array of number
// todo3: calculate the sum of all its numbers

// !Answer:
let sum=[0]
function sumOf(allNumbers) {
    for (let i = 0; i < allNumbers.length; i++) {
        sum[0]+=allNumbers[i]
    }
}
sumOf(allNumbers)
console.log(sum);





// ? Question-5:write a function to reverse a string.(hint:first,convert to array,but answer must to be string)
// ? "google" => "elgoog"
// ! you can search how to reverse string

// !Answer:
let str="Dina Palizvan"
let reversedString=[]
function reverse(str) {
    for (let i = str.length-1; i>=0; i--) {
        reversedString+=str[i]
    }
}
reverse(str)
console.log(reversedString);