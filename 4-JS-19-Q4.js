// ? Qustion-4:Write a code that changes the background color of the stars when we click on them.
// hint: watch help.mp4
//! answer

const stars=document.querySelectorAll(".stars i")
console.log(stars);

stars.forEach((star)=>{
    star.onclick=()=>{
        console.log(star.classlist);
        star.classList.toggle("active")
    }
})