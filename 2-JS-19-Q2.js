//? Question-2:Write a code that, upon clicking a button labeled "Place Bid" changes its text to "Added to Cart" and disables the button (you can modify the style if necessary).
// hint: watch help.mp4
//!Answer:

const btn=document.querySelector(".cards__card__footer__btn button")
const btnText= document.querySelector(".cards__card__footer__btn button p")
const btnIcon= document.querySelector(".cards__card__footer__btn button i")

btn.onclick=()=>{
    btnIcon.style.display="none";
    btnText.textContent="Added to Cart";
    btn.disabled=true
}