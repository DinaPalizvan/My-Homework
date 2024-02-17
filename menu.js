//=================selectings=====================
const topBtn=document.querySelector("#top-btn")
const article=document.querySelector("article")
const cart=document.querySelector(".cart")
const cartLink=document.querySelector(".cart a")

//================fetching data===================
const getData= async()=>{
    const res= await fetch("http://localhost:3000/products")
    const data=await res.json()
    return data
}
//================creating cards==================
getData().then(data=>{
    data.forEach(element => {
        const section=document.createElement("section")
        const img=document.createElement("img")
        img.src=element.src
        const div=document.createElement("div")
        const title=document.createElement("h3")
        title.textContent=element.name
        const p=document.createElement("p")
        const price=document.createElement("span")
        price.textContent=element.price
        const weight=document.createElement("span")
        weight.textContent=element.weight
        const button=document.createElement("button")
        button.classList.add("addBtn")
        button.textContent="Add"
        article.append(section)
        section.append(img, div)
        div.append(title, p, button)
        p.append(price, weight)
    });
}).catch(err=>console.log(err))

//================top button======================
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 500) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

topBtn.onclick = () => {
    window.scroll({
      behavior: "smooth",
      top: 0,
    });
  };

//=================add to cart btn==========================
let counter=0
article.addEventListener("click",(e)=>{
    if(e.target.classList.contains("addBtn")){
        counter++
        e.target.textContent="Added to Cart"
        cart.classList.add("cart-after")
        cart.innerHTML=`<i class="fa-solid fa-cart-shopping"></i> ${counter}`
    }
})
