// ? Remember domthis.js from your session?
// todo1: Look at the code below, fix it, and explain how you resolved the problem.
// Note: In this code, console.log and console.dir should refer to the button and h1 element, not the window.

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};
//ADDED COMMENTS BETWEEN rgb.
const buttons = document.querySelectorAll('button');

for (let button of buttons) {
  button.addEventListener('click', function() {
    //CHANGED THE ARROW FUNCTION INTO A NORMAL FUNCTION CUZ THIS IN ARROW FUNCTION REFERS TO WINDOW.
    console.log(this);
    console.dir(this);
    button.style.backgroundColor = makeRandColor();
    button.style.color = makeRandColor();
  });
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
  h1.addEventListener('click', function() {
    //CHANGED THE ARROW FUNCTION INTO A NORMAL FUNCTION CUZ THIS IN ARROW FUNCTION REFERS TO WINDOW.
    console.log(this);
    console.dir(this);
    h1.style.backgroundColor = makeRandColor();
    h1.style.color = makeRandColor();
  });
}
