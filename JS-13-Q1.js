//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer:
const func1=()=>{
    console.log('Action');
    const func2=()=>{
        console.log('Potential');
        const func3=()=>{
            console.log('Signals');
        }
        func3();
    }
    func2();
}
func1()