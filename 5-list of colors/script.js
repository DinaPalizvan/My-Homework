//selecting
const content=document.querySelector("#content")
//creating the select element and appending it 
const select=document.createElement("select")
const choose=document.createElement("option")
choose.textContent="Please choose a color"
choose.value="nothing"
select.append(choose)
content.append(select)
//creating p tag
const result=document.createElement("p")
content.append(result)
//the main function
function listOfColours(colours) {
  colours.forEach(color=>{
  const option=document.createElement("option")
  option.textContent=color
  option.value=color
  select.append(option)
  select.onchange=(e)=>{
    result.textContent=`You have selected ${e.target.value}.`
    result.style.color=e.target.value
  }
})
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown", "cyan", "bisque", "purple"];

listOfColours(colours);



