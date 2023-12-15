// ?Question-3:follow these steps:
// todo-1:select "ul" element with "navbar" class.
// todo-2:add the items of the navbarItem array to the "ul" element by appending them as <li> elements.
// todo-3:Add the class "item" to each <li> element.
// todo-4:Edit the <li> tags according to the image.(You can check the help folder or use the following style for each <li> element)
/**
  {
    margin: 0 1rem;
    cursor: pointer;
  }
*/
// !Answer:
const navbarItem = ["Home", "Products", "Blog", "Contact us"];

const nav= document.querySelector(".navbar")
console.log(nav);

navbarItem.forEach((element)=>{
  let liEl=document.createElement("li")
  liEl.className="item"
  liEl.style.cssText="margin: 0 1rem; cursor: pointer"
  liEl.textContent=element
  nav.append(liEl)
})