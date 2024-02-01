/*
 Todo 1: Use this site -> "https://jsonplaceholder.typicode.com/users"
 Todo 2: Make a card with user data
 Todo 3: Each card should contain the name and company name
 Todo 4: In order to use the HTML and CSS, use the <article> tag as a container to append all the cards. For each card, create a <div> to set the innerText inside it.
*/

const article = document.querySelector("article");
article.style.cssText="display: flex; flex-wrap: wrap; margin-top: 22vh;"
document.body.style.background="#96B6C5"
const getData=async ()=>{
    const res= await fetch("https://jsonplaceholder.typicode.com/users")
    const data= await res.json()
    return data
}
getData().then(data=>{
    console.log(data);
    data.forEach(element => {
        const div=document.createElement("div");
        div.style.cssText="width:175px; height: 100px; background-color: #EEE0C9; margin: 20px; padding: 20px 25px; border: 5px double #ADC4CE; text-align: center";
        const name=document.createElement("h4")
        name.textContent= element.name;
        const company=document.createElement("div")
        company.textContent=element.company.name
        div.append(name)
        div.append(company)
        article.append(div)
    });
}).catch(e=>{
    throw new Error()
})
