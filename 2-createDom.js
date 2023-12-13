//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
//todo3. Get each of the paragraph using document.querySelector(#id)
//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
//todo5. Loop through the nodeList and get the text content of each paragraph
//todo6. Set a text content to the fourth paragraph
//todo7. Set id and class attribute for all the paragraphs using different methods
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

//2:
 const pEleFirst= document.querySelector('p')

 //3:
 const firstP= document.querySelector('#pOne')
 const secondP= document.querySelector('#pTwo')
 const thirdP= document.querySelector('#pThree')
 const fourthP= document.querySelector('#pFour')

 //4:
 const allP=document.querySelectorAll('p')

 //5:
 allP.forEach(para=>{
    console.log(para.innerHTML);
 })

 //6:
fourthP.textContent='abolfazl'

//7:
firstP.setAttribute('class', 'firstPara')
secondP.id='secondPara'
thirdP.setAttribute('id','thirdPara')
fourthP.className= 'fourthPara'
console.log(document.querySelector('body').innerHTML);

//8:
firstP.style.color='aqua'
secondP.style.fontSize= '2rem'
thirdP.style.textShadow='0 10px 10px blue'
fourthP.style.background='orange'

//9:
for(let i=0; i<allP.length; i++){
    if(i%2===0){
       allP[i].style.color='red' 
    }else{
        allP[i].style.color='green'
    }
}