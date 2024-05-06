const express= require("express")
const db= require("./db/connection")


const app= express()
const port= process.env.PORT || 5000









const start=async()=>{
    await db.getConnection()
    console.log("connected to the database successfully!");
    app.listen(port, ()=>console.log(`you are listening to port ${port}`))
}
start() 
