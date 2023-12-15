// ? Question-2:Select all spans  with the 'circle' class and write a code to change classes that have 'blue' with 'purple' and vice versa

// !Answer:
const circleSpans= document.querySelectorAll(".circle");
console.log(circleSpans);


circleSpans.forEach((spanEl)=>{
    if(spanEl.classList.contains("blue")){
        spanEl.classList.remove("blue");
        spanEl.classList.add("purple")
}else{
    spanEl.classList.remove("purple");
    spanEl.classList.add("blue")
}
})