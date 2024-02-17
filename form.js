//=================selectings=======================
const form=document.querySelector("form")
const submit=document.querySelector("button")
const pass=document.querySelector("#pass")
const validation=document.querySelector(".validation")
const texts=document.querySelectorAll("#add")
const namee=document.querySelector("#name")
const them= document.querySelector("#them")

//==================password check===================
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const alphabet="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let contains=false
    for(let i=0; i<pass.value.length; i++){
        if(alphabet.includes(pass.value[i])){
            contains=true
            break
        }
    }
    if(pass.value.length<6){
        validation.textContent="your password should have at least 6 characters"
        validation.style.color="red"
    }else if(pass.value.length>6 && contains===false){
        validation.textContent="your password should have at least 1 alphabetical character"
        validation.style.color="orange"
    }else if(pass.value.length>6 && contains){
        validation.textContent="Good chioce ;) now please make sure all inputs are full to submit your order."
        validation.style.color="green"
    }

    if(validation.style.color==="green" && texts.value!=="" && namee.value!==""){
        form.textContent="Thank You for Trusting Us. Your order is getting ready and soon you will recive it. Hope you enjoy it. -Sweet Bakery"
    }
})
