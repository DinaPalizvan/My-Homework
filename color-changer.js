/*
- Create two sections in the middle of the page 

1- The first section contains two elements:
  - A text input.
  - A color input.

When the user clicks on the color input, a color picker will appear.
Whatever color the user chooses, the background color of the page will change accordingly.
The hex code of the selected color will be displayed in the text input.

2- Dynamic Color Change:
By modifying the code in the text input, the color of the page should update.

3- In the second section(History Section):
Display the last 10 colors selected by the user.
*/

const text=document.querySelector("#colorText")
const color=document.querySelector("#color")
const list=document.querySelector("#lastTenColors")


color.addEventListener("input",()=>{
  document.body.style.background= color.value
  text.value=color.value
})

text.addEventListener("input", ()=>{
  document.body.style.background= text.value
  color.value=text.value
})


text.addEventListener("change", ()=>{
  const item=document.createElement("li")
  item.textContent=text.value
  list.insertAdjacentElement("afterbegin", item)
})

color.addEventListener("change", ()=>{
  const item=document.createElement("li")
  item.textContent=text.value
  list.insertAdjacentElement("afterbegin", item)
})