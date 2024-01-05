//? look at the code in html file and say how we can attach an event to all of the buttons without actually giving it to them and selecting the button tag? write it's code .
//Note: your code should log the text content of the clicked button to the console.

// ! answer ===========================================
const parent=document.querySelector(".parent")
const children=parent.children

for(let i=0; i<children.length; i++){
    children[i].onclick=()=>{
        console.log(children[i].textContent)
    }
}

// همینطوری? :/