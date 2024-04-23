const express=require("express")
const app=express()
const fs=require("fs")

app.use(express.urlencoded())
app.use(express.json())
app.use(express.static("homePage"))
app.use(express.static("composePage"))
app.use(express.static("blogsPage"))

//======================
const data=fs.readFileSync("./db/data.json", "utf-8")
const dataArr=JSON.parse(data)
//=========================

app.get("/", (req, res)=>{
    res.sendFile("./homePage/index.html")
})

app.get("/compose", (req, res)=>{
    res.sendFile("./composePage/compose.html", {root: __dirname})
})

app.get("/about", (req, res)=>{
    res.sendFile("./about.html", {root: __dirname})
})

app.get("/contact", (req, res)=>{
    res.sendFile("./contact.html", {root: __dirname})
})

app.post("/compose",(req, res)=>{
    try {
        const {title, post}=req.body
        const data=fs.readFileSync("./db/data.json", "utf-8")
        const dataArr=JSON.parse(data)
        dataArr.push({title, post})
        fs.writeFileSync("./db/data.json", JSON.stringify(dataArr))
        res.redirect("/")   
    } catch (error) {
        console.log(error);
    }
})

app.get("/api", (req, res)=>{
    const data=fs.readFileSync("./db/data.json", "utf-8")
    const dataArr=JSON.parse(data)
    res.json(dataArr)
})

app.get("/blogsAPI", (req, res)=>{
    const blogs=fs.readFileSync("./db/blogs.json", "utf-8")
    const blogsArr= JSON.parse(blogs)
    res.json(blogsArr)
})

app.get("/blogs", (req, res)=>{
    res.sendFile("./blogsPage/blogs.html", {root: __dirname})
})

app.get("/blogs/:name", (req, res)=>{
    const search= req.params.name
    const newData=fs.readFileSync("./db/data.json", "utf-8")
    const newDataArr=JSON.parse(newData)
    const selected=newDataArr.find(p=>(p.title).toLowerCase()===search.toLowerCase())
    const blogs=fs.readFileSync("./db/blogs.json", "utf-8")
    const blogsArr= JSON.parse(blogs)
    blogsArr[0]=selected
    console.log(blogsArr);
    fs.writeFileSync("./db/blogs.json", JSON.stringify(blogsArr))
    res.redirect("/blogs")
})



app.listen(3000, ()=>console.log("port 3000 it is!"))