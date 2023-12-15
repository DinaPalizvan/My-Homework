// ? Question-1:follow these steps:
// todo-1:Select the body tag and apply this color to the background "#0a122d"
// todo-2:select image and set margin "4rem 0"
// todo-3:Apply a rounded border to the image and set its size to "1 rem"
// todo-4:Select h1 and h5 tags and place them in the appropriate position according to the image.(you can check help folder)
// !Answer:

const imageEl= document.querySelector("img")
const heading= document.querySelector("h1")
const h5El= document.querySelector("h5")

document.body.style.background="#0a122d"
// console.log(imageEl);
imageEl.style.cssText="margin: 4rem 0; border-radius: 1rem"
heading.style.cssText= "position:relative; bottom: 33rem ;left:1rem"
h5El.style.cssText= "position:relative; bottom: 32.5rem ;left:1rem"

