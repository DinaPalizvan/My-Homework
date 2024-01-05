/*
Look at puzzle.png .
it's true!
You have to design a puzzle.

- By dragging the puzzle pieces, the picture is complete.
- Watching the tutorial below will help you do it.
(https://youtu.be/vJn5_SytV_U?si=bwfi9g4lhf4BVGEl)
*/


// I know my way is not best practice and i could do it with a more beautiful way. But it is 5:04 in the morning and my brain is DEAD.❤️ 

const boxes=document.querySelectorAll(".box")
const images=document.querySelectorAll("img")
//=======some annoying selectings=========
const box1=document.querySelector(".bone")
const box2=document.querySelector(".btwo")
const box3=document.querySelector(".bthree")
const box4=document.querySelector(".bfour")
const box5=document.querySelector(".bfive")
const box6=document.querySelector(".bsix")
const img1=document.querySelector(".ione")
const img2=document.querySelector(".itwo")
const img3=document.querySelector(".ithree")
const img4=document.querySelector(".ifour")
const img5=document.querySelector(".ifive")
const img6=document.querySelector(".isix")
//=======================================
//works only if you put it rigth
img1.addEventListener("dragstart", e=>{
    box1.addEventListener("drop", e=>{
        e.preventDefault()
        e.target.append(img1)
    })
})
box1.addEventListener("dragover",e=>{
    e.preventDefault()
})
img2.addEventListener("dragstart", e=>{
    box2.addEventListener("drop", e=>{
        e.preventDefault()
        e.target.append(img2)
    })
})
box2.addEventListener("dragover",e=>{
    e.preventDefault()
})
img3.addEventListener("dragstart", e=>{
    box3.addEventListener("drop", e=>{
        e.preventDefault()
        e.target.append(img3)
    })
})
box3.addEventListener("dragover",e=>{
    e.preventDefault()
})
img4.addEventListener("dragstart", e=>{
    box4.addEventListener("drop", e=>{
        e.preventDefault()
        e.target.append(img4)
    })
})
box4.addEventListener("dragover",e=>{
    e.preventDefault()
})
img5.addEventListener("dragstart", e=>{
    box5.addEventListener("drop", e=>{
        e.preventDefault()
        e.target.append(img5)
    })
})
box5.addEventListener("dragover",e=>{
    e.preventDefault()
})
img6.addEventListener("dragstart", e=>{
    box6.addEventListener("drop", e=>{
        e.preventDefault()
        e.target.append(img6)
    })
})
box6.addEventListener("dragover",e=>{
    e.preventDefault()
})
