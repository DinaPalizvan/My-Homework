//Create a /who route that passes a name parameter to the app and prints the name parameter to the screen.
// hint: use req.params

//Answer
const express= require("express")
const app=express()

app.get("/who/:name", (req, res)=>{
    const {name}= req.params
    res.send(name)
})


const PORT=3005
app.listen(PORT, ()=>{
    console.log("port 3005");
})