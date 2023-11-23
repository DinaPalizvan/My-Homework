// ? Question-1 :Using an example, explain the difference between block,global and function scope in variables.
// !example:

//global scope
var global= 'global variable';

function fnName() {
    //function scope
    var fnScope= 'function scope';

    if(true){
        //block scope
        var block='block scope';
    }
    console.log(global);//works
    console.log(fnScope);//works
    console.log(block);//works
}
console.log(global);//works
console.log(fnscope);//error
console.log(block);//error

let globalScope='In a programming environment, the global scope is the scope that contains, and is visible in, all other scopes. '
let functionScope=' The scope created with a function'
let blockScope='The scope created with a pair of curly braces (a block).'


