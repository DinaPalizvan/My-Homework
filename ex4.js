//Create a /weird route that passes name and title parameters to the app and prints the name and title parameters to the screen.

//Answer
const express= require("express")
const app=express()


app.get("/weird", (req, res)=>{
    const {name, title} = req.query
    res.send(name +" "+ title)
    console.log(name+ title);
})

const PORT=3005
app.listen(PORT, ()=>{
    console.log("port 3005");
})