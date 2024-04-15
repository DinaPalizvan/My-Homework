//Q2. Create a route that redirects to '/about'

//Answer
const express= require("express")
const app=express()


app.get("/", (req, res)=>{
    res.redirect("/about")
})


const PORT=3005
app.listen(PORT, ()=>{
    console.log("port 3005");
})