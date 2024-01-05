/*
? Look at seasons.png , design something similar to it.
? By clicking on each circle, the page background and text should change 
todo1: The background should be similar to the background of clicked circle
((#FFADE6, #F169E8), (#90F8A7, #4DAF5D), (#CDFFD8, #94B9FF), (#FFDE59, #FF914D))
hint: use linear-gradient style for creating a background with two colors
todo2:  The text should be the name of the clicked circle season

*/

const spring= document.querySelector(".spring")
const summer= document.querySelector(".summer")
const fall= document.querySelector(".fall")
const winter= document.querySelector(".winter")
const text=document.querySelector(".text")
//********IF YOU CANNONT LOAD THE PHOTOS PLEASE USE VPN.********************* 

spring.onclick=()=>{
    text.textContent="Spring"
    document.body.style.background=`linear-gradient(0.25turn, #FFADE6, #F169E8)`
}
summer.onclick=()=>{
    text.textContent="Summer"
    document.body.style.background=`linear-gradient(0.25turn, #90F8A7, #4DAF5D)`
}
fall.onclick=()=>{
    text.textContent="Fall"
    document.body.style.background=`linear-gradient(0.25turn, #FFDE59, #FF914D)`
}
winter.onclick=()=>{
    text.textContent="Winter"
    document.body.style.background=`linear-gradient(0.25turn,#CDFFD8, #94B9FF)`
}

//sorry its not responsive