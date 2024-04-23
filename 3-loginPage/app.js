const express=require("express")
const app= express()

app.use(express.urlencoded())

app.get("/", (req, res)=>{
    res.sendFile("login.html", {root:__dirname})
})

app.post("/" ,(req, res)=>{
    const pass=Number(req.body.pass)
    const user= req.body.user
    if(user===""){
        res.send("Please enter a username")
    }
    if(pass==0){
        res.send("Please enter a password")
    }
    if(pass!==123456789){
        res.send("your pass is incorrect")
    }else{
        res.send(`WELCOME ${user}`)
    }
    
})



const PORT=3000
app.listen(PORT, ()=>console.log("On port 3000"))