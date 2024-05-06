const express= require("express")
const db= require("./db/connection")

const userRouter= require("./routes/users.rotes")


const app= express()
const port= process.env.PORT || 3000

app.use(express.json())
app.use("/employee", userRouter )

// app.get("/employee", async(req, res)=>{
//     const query="select * from employee;"
//     const [users]= await db.execute(query)
//     console.log(users);
// })







const start=async()=>{
    await db.getConnection()
    console.log("connected to the database successfully!");
    app.listen(port, ()=>console.log(`you are listening to port ${port}`))
}
start() 
