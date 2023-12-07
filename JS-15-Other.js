// ? Question-1:select section counter by class name(.cards__card__img__icon) and save in variable "counterEl":
// !Answer:
let counterEl= document.querySelector('.cards__card__img__icon')
// let counterEl= document.getElementsByClassName('cards__card__img__icon')


// ? Question-2:select item counter by id(#counter) and save in variable "counter":
// !Answer:
let counter= document.querySelector('#counter')
// let counter= document.getElementById('counter')


// ? Question-3:select section (.cards) and save in variable "card":
// !Answer:
let card= document.querySelector('.cards')
// let card= document.getElementsByClassName('cards')


// ? Question-4:select section (.cards__card) and save in variable "cards":
// !Answer:
let cards= document.querySelector('.cards__card')
// let cards=document.getElementsByClassName('cards__card')


// ? Question-5:select button section card footer and save in variable "btnEl":
// !Answer:
let btnEl= document.querySelector('section.cards__card__footer__btn button')
console.log(btnEl);

// ? Question-6:select the img that has attribute "man" and show in console:
// !Answer:
let man=document.querySelector('img[alt="man"]')
// console.dir(man);
console.log(man);