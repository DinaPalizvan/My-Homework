// According to your js11 session, write a code that shows why we shouldn't use var?

// can be redeclared
var firstName='Dina'
firstName='Amir'
console.log(firstName);//output: 'Amir'


//can have access to it in the whole global scope
if(true){
    var name='Dina'
}
console.log(name);//output: 'Dina'


//can be used before declaration
console.log(sth);//output: undefined
var sth='lkwjlgjndsflkv'