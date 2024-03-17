/* 
 John and Mike both play basketball on different teams. In the latest three games:
 
 1- John's team scored 89, 120, and 103 points.
 2- Mike's team scored 116, 94, and 123 points.

 Calculate the average score for each team.
 Determine which team wins on average (highest average score), and print the winner to the console. Also, include the average score in the output.
 Then, change the scores to show different winners. 
*/
const john=[89,120,103]
const mike=[116,94,123]

const average=(team, scores)=>{
    const result= (scores.reduce((total, score)=>total+score,0))/scores.length
    console.log(`${team}'s team average: ${result}`);
    return result
}

const johnAverage=average("John",john)
const mikeAverage=average("Mike",mike)
console.log("=================");

if(johnAverage>mikeAverage){
    console.log("The winner is: John", johnAverage);
}else{
    console.log("The winner is: Mike", mikeAverage);
}