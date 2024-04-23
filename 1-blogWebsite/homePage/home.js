const main=document.querySelector("main")

const getData=async()=>{
    const res= await fetch("http://localhost:3000/api")
    const data= await res.json()
    console.log(data);
    data.forEach(e => {
        const div=document.createElement("div")
        const h2= document.createElement("h2")
        const p=document.createElement("p")
        h2.textContent=e.title
        p.textContent=e.post
        div.append(h2, p)
        main.append(div)
    });

}

getData()




