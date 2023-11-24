//? follow these steps:
// todo1 : Write a code that logs “wait 5 sec”
// todo2 : and then after 5 seconds logs “ready?”
// todo3 :  and finally logs “🚀”  every one second
// todo4 : ( write a condition that cleans up the setInterval after 10 seconds to avoid crashing)

//!   Answer:
let i=0
console.log('Wait 5 seconds.');
setTimeout(()=>{
    console.log('READY?!');
    let stop=setInterval(()=>{
        console.log('🚀');
        i++;
        if(i===10){
            clearInterval(stop)
        }
    },1000)
},5000)
