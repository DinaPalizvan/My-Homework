/*
Do you remember the game of hop?

Get a  number between 2 and 6 from the user(you can use prompt and alert in this practice), then log from 1 to 200 in the console.
It is just like the game of hop, whatever number the user enters, the numbers will be printed accordingly.

Example: If the user enters the number 3, the numbers will be printed like this:
1, 2, hop, 4, 5, hop, 7, 8, hop, 10 ..., 200 
*/
//! Answer:
let number=prompt('LET\'S PLAY HOP! Enter a number between 2 and 6:)')
console.log(number);
const hop=num=>{
    let result=[]
    if(number<2 || number>6){
        return 'WTF? Enter a valid number!'
    }
    for(let i=1; i<=200; i++){
        if(i%num===0){
            result.push('hop')
        }else{
            result.push(i)
        }
    }
    return result.join(', ')
}
console.log(hop((number)));