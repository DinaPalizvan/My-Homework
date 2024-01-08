let randomNumber = Math.floor(Math.random() * 100 + 1);
let tryNum= 7
function guessNumber() {
  //Collect input from the user
  const output= document.querySelector(".final-output")
  const tries=document.querySelector(".Tries-output")
  let guess = document.querySelector(".inputs-Values").value;
  tries.textContent=`Number of Tries: ${tryNum}`

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess>100 || guess<1 || guess.length===0){
    output.textContent="Please enter a number between 1 and 100"
    tryNum++
  }
  tryNum--
  tries.textContent=`Number of Tries: ${tryNum}`
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  if(guess>randomNumber && guess<101){
    output.textContent="Number is too high, try again"
  }
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  if(guess<randomNumber && guess>0){
    output.textContent="Number is too low, try again"
  }
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  if(guess==randomNumber){
    output.textContent="Guess is correct. You win!"
    tries.textContent=`It took you ${7-tryNum} tries`
  }
  if((tryNum==0 && !guess==randomNumber) || tryNum<0){
    tries.textContent=''
    output.textContent=`You lose. The number was ${randomNumber}` 
  }
}
// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  const newGame= document.querySelector(".btnNewGame")
  const number=document.querySelector(".inputs-Values")
  const output= document.querySelector(".final-output")
  const tries=document.querySelector(".Tries-output")
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
  newGame.onclick=()=>{
    randomNumber = Math.floor(Math.random() * 100 + 1);
    number.value=null
    output.textContent="Guess a number between 1 and 100"
    tryNum=7
    tries.textContent=`Number of Tries: ${tryNum}`
  }
}
newGame()
//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}
document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
