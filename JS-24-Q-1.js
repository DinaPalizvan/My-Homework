//? Question-3: Follow these steps:
//todo-1: Write a Factory function (function name must be: createPerson).
//todo-2: The createPerson factory function accepts three parameters: name, age, and profession
//todo-3: Define a method (method name must be: introduce) on the object. This method must return this structure: "Hi, my name is (name). I'm (age) years old and work as a (profession)."
//todo-4: Then display below outputs using the function createPerson with these parameters: (name: John Doe, age: 30, profession: Web Developer, or our personal information).
/**
 * Output: John Doe
 * Output: 30
 * Output: Web Developer
 * Output: Hi, my name is John Doe. I'm 30 years old and work as a Web Developer.
 *
 */

//!Answer:
const createPerson=(name, age, profession)=>{
    const obj={}
    obj.__proto__.introduce= function(){
        return `Hi, my name is ${name}. I'm ${age} years old and work as a ${profession}.`
    }
    console.log(obj.introduce());
    return obj.introduce()
}
createPerson("John Doe", "30", "Web Developer")
