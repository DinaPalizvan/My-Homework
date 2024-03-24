/*
- We should have 4 buttons.

- In the names: happy, sad, angry and random.

- Clicking on each button should show an emoji with the same state.

* Each time a different emoji of the same state should be observed.

- When an emoji is shown, its state is written below.

- By clicking on the random button, an emoji should be shown from all modes.
*/
const happyBtn=document.querySelector("#happy")
const sadBtn=document.querySelector("#sad")
const angryBtn=document.querySelector("#angry")
const randomBtn=document.querySelector("#random")
const state=document.querySelector("#state")


const emotions={
    happy:["😀","😁","😂","😃","😄","😊","🙂"],
    angry:["😑","🙄","😒","😠","😡","🤬","🧐"],
    sad:["😥","😭","😢","😟","😞","🙁","😔"]
}

happyBtn.addEventListener("click",()=>{
    const randomNum=Math.floor(Math.random()*emotions.happy.length)
    document.querySelector("#emoji").textContent=""
    document.querySelector("#emoji").append(emotions.happy[randomNum])
    state.textContent="happy"
})

sadBtn.addEventListener("click",()=>{
    const randomNum=Math.floor(Math.random()*emotions.sad.length)  
    document.querySelector("#emoji").textContent=""
    document.querySelector("#emoji").append(emotions.sad[randomNum])
    state.textContent="sad"
})

angryBtn.addEventListener("click",()=>{
    const randomNum=Math.floor(Math.random()*emotions.angry.length)
    document.querySelector("#emoji").textContent=""
    document.querySelector("#emoji").append(emotions.angry[randomNum])
    state.textContent="angry"
})

randomBtn.addEventListener("click",()=>{
    const randomIndex=Math.floor(Math.random()*3)
    const randomNum=Math.floor(Math.random()*6)
    const keys=Object.keys(emotions)
    const randomKey=keys[randomIndex]
    document.querySelector("#emoji").textContent=""
    document.querySelector("#emoji").append(emotions[randomKey][randomNum])
    state.textContent=randomKey
})

