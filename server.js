require("dotenv").config()
const express= require("express")
const app= express()
const cors= require("cors")
const port=process.env.PORT || 3000



const connectDB=require("./server/db/connectdb")


app.use( cors(),express.json(), express.urlencoded({extended: true}))

app.use("/member", require("./server/routes/member.routes"))

// app.get("/", (req, res)=>{res.send("helloooo")})


const start=async()=>{
    try {
        await connectDB(process.env.URI)
        app.listen(port, ()=>console.log(`you are listening to port ${port}`))
    } catch (error) {
        console.log(error);
    }
}
start()  

 


