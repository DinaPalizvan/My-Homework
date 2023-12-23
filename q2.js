/*
  todo 1: generate a random color using Math and rgb
  todo 2: add a div and change the background color when user brings the mouse over the div
*/

// ! ========== Answers ==========
const divEl=document.querySelector("#hover")

divEl.onmouseover=()=>{
  let r= Math.ceil(Math.random()*255)
  let g= Math.ceil(Math.random()*255)
  let b= Math.ceil(Math.random()*255)
  divEl.style.background=`rgb(${r},${g},${b})`
}