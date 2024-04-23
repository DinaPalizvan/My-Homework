const express= require ("express")
const app= express()

app.use(express.urlencoded())

app.get("/", (req, res)=>{
    res.sendFile("calculator.html" ,{root: __dirname})
})
 

app.post("/", (req,res)=>{
    const num1=Number(req.body.firstNum)
    const num2=Number(req.body.secondNum)
    const sum=num1+num2
    res.send(`Sum of ${num1} and ${num2} is ${sum}`)
})



const PORT = 3000
app.listen(PORT, ()=> console.log("port 3000"))