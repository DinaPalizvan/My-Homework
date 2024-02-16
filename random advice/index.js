const p=document.querySelector("p")
const button=document.querySelector("button")
const span=document.querySelector("span")
const getData=async()=>{
    const res= await fetch("https://api.adviceslip.com/advice")
    const data= await res.json()
    console.log(data);
    return data
}
button.addEventListener("submit",
    getData().then(data=>{
        p.textContent=`"${data.slip.advice}"`
        span.textContent=`#${data.slip.id}`
}).catch(e=>{
    throw new Error
}))