/*
? You have to write a code that changes the color of rectangles upon clicking each color.

- First, look at color-palette1.png . You should create a similar page.
- There are seven colored circles, and upon clicking each circle, the rectangles will change their color. You can find the color codes for the circles below.
- The color chosen will be applied to the first rectangle, and subsequent rectangles will be assigned colors from its spectrum.
- hint: you can modify the alpha (a) of the rgba color to create the spectrum color 
- For example, you can refer to photo color-palette2.png 2, it is for the time when the green color is clicked.
*/
//===================selectings============================
const circles=document.querySelectorAll(".circle")
const green= document.querySelector("#c-one")
const yellow= document.querySelector("#c-two")
const orange= document.querySelector("#c-three")
const red= document.querySelector("#c-four")
const pink= document.querySelector("#c-five")
const purple= document.querySelector("#c-six")
const blue= document.querySelector("#c-seven")
const sqs=document.querySelectorAll(".square")
//========================================================
const colors=['rgba(31, 127, 102, 1)',
    'rgba(255, 200, 0, 1)',
    'rgba(255, 123, 0, 1)',
    'rgba(216, 1, 1, 1)',
    'rgba(223, 4, 70, 1)',
    'rgba(127, 31, 85, 1)' ,
    'rgba(93, 18, 199, 1)']
//=================making the circles colored==================
circles.forEach((circle, index)=>{
    circle.style.backgroundColor=colors[index]
})
//====================color shadows=========================
let greenShadow=['rgba(31, 127, 102, 1)','rgba(31, 127, 102, 0.8)','rgba(31, 127, 102, 0.6)','rgba(31, 127, 102, 0.4)','rgba(31, 127, 102, 0.2)']
let yellowShadow=['rgba(255, 200, 0, 1)','rgba(255, 200, 0, 0.8)','rgba(255, 200, 0, 0.6)','rgba(255, 200, 0, 0.4)','rgba(255, 200, 0, 0.2)']
let orangeShadow=['rgba(255, 123, 0, 1)','rgba(255, 123, 0, 0.8)','rgba(255, 123, 0, 0.6)','rgba(255, 123, 0, 0.4)','rgba(255, 123, 0, 0.2)']
let redShadow=['rgba(216, 1, 1, 1)','rgba(216, 1, 1, 0.8)','rgba(216, 1, 1, 0.6)','rgba(216, 1, 1, 0.4)','rgba(216, 1, 1, 0.2)']
let purpleShadow=['rgba(127, 31, 85, 1) ','rgba(127, 31, 85, 0.8)','rgba(127, 31, 85, 0.6) ','rgba(127, 31, 85, 0.4) ','rgba(127, 31, 85, 0.2) ']
let pinkShadow=['rgba(223, 4, 70, 1)','rgba(223, 4, 70, 0.8)','rgba(223, 4, 70, 0.6)','rgba(223, 4, 70, 0.4)','rgba(223, 4, 70, 0.2)']
let blueShadow=['rgba(93, 18, 199, 1)','rgba(93, 18, 199, 0.8)','rgba(93, 18, 199, 0.6)','rgba(93, 18, 199, 0.4)','rgba(93, 18, 199, 0.2)']
//===========================the main function==============================
const coloring=(div,color,circle, shadow)=>{
    circle.onclick=()=>{
            circle.style.boxShadow=`0 0 0 5px ${shadow}`
            div.forEach((element,index)=>{
            element.style.backgroundColor=color[index];
            element.style.border="none";
        })
    }
}
//=====================calling the function for different colors==================
coloring(sqs, greenShadow, green, 'rgba(31, 127, 102, 1)')
coloring(sqs, yellowShadow, yellow,'rgba(255, 200, 0, 1)')
coloring(sqs, orangeShadow, orange,'rgba(255, 123, 0, 1)')
coloring(sqs, redShadow, red,'rgba(216, 1, 1, 1)')
coloring(sqs, pinkShadow, pink,'rgba(223, 4, 70, 1)')
coloring(sqs, purpleShadow, purple,'rgba(127, 31, 85, 1)')
coloring(sqs, blueShadow, blue,'rgba(93, 18, 199, 1)')