//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring
//Answer:


//1: **PLEASE UNCOMMENT THIS SECTION
// if(true){
//     var name='dina'
// }
// let name='mina'//SyntaxError because we can access the name that was declared in the if statement. because it was declared with 'var'.
// if(true){
//     let name='dina'
//     console.log(name);//dina
// }
// const name='mina'
// console.log(name);//mina...doesnt show error
// var age=10
// var age=20
// console.log(age);//20... var can be redeclared and reassigned
// let age2=30
// let age2=40//error. cant redeclare let.
// age2=50//can reassign let
// const height=160
// const height=170//cant be redeclared
// height=180// cant be reassigned

//===============================================

//2:
function sum (a,b){
    return a*(b**2)
}
console.log(sum(10,2));
//instead we can write it this way:
const sum2=(a,b)=>a*(b**2)
console.log(sum2(10,2));

//================================================

//3:
const hello=(name,lastName)=>'hello'+' '+ name+ ' '+ lastName +'.'
console.log(hello('dina','palizvan'));
//instead we can write it this way:
const hello2=(name,lastName)=>`hello ${name} ${lastName}`
console.log(hello2('leonardo','dicapreo'));

//================================================

//4:
const names=['dina', 'sara', 'aghil', 'hossein','benyamin']
const firstPerson= names[0]
const secondPerson=names[1]
const thirdPerson= names[2]
//...
console.log(firstPerson);
console.log(secondPerson);
console.log(thirdPerson);
//instead we can write it this way:
const [first, second, third, ...other]=names
console.log(first,second,third,other);