// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer

const closeBtn=document.querySelector(".ri-close-line")
const message=document.querySelector(".message")

closeBtn.onclick=()=>{
    message.style.visibility="hidden"
}