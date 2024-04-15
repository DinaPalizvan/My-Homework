// Q1.Handle a POST request to the route '/submit' with the provided data
const data = { username: 'example', password: 'password' };

//Answer
const express= require("express")
const app=express()
// console.log(app);

app.post("/submit", (req, res)=>{
    res.send(data)
})


const PORT=3005
app.listen(PORT, ()=>{
    console.log("port 3005");
})