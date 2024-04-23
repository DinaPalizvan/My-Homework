const express=require("express")
const app= express()

app.use(express.urlencoded())

app.get("/bmi-calculator", (req,res)=>{
    res.sendFile("bmi.html", {root: __dirname})
})

app.post("/bmi-calculator", (req, res)=>{
    const weigth= Number(req.body.weight)
    const height= Number(req.body.height)
    const bmi= weigth/(height**2)
    res.send(`your BMI is ${bmi}`)
})
 

const PORT=3000
app.listen(PORT, ()=>console.log("port 3000"))