require("dotenv").config()
const express= require("express")
const cors= require("cors")
const port=process.env.PORT || 3000
const connectDB=require("./server/db/connectdb")

const app= express()
app.use(cors(), express.json(), express.urlencoded({ extended: true }))


app.use("/member", require("./server/routes/member.routes"))


const start=async()=>{
    try {
        await connectDB(process.env.URI)
        app.listen(port, ()=>console.log(`you are listening to port ${port}`))
    } catch (error) {
        console.log(error);
    }
}
start()  


// const Member=require("./server/models/member.model")

// const getAll=async()=>{
//     const members=await Member.find()
//     return members
// }

// app.get("/member", (req, res)=>{
//     getAll().then(data=>res.json(data))
// })