const express= require("express")
const db= require("./db/connection")

const userRouter= require("./routes/users.rotes")


const app= express()
const port= process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/employee", userRouter )

// app.get("/employee", async(req, res)=>{
//     const query="select * from employee;"
//     const [users]= await db.execute(query)
//     console.log(users);
// })

// app.post("/employee", async (req, res)=>{
//     console.log(req.body);
//     const {name, role, email=null, phone=null}= req.body
//     const query= "insert into employee (name, role, email, phone) values (?,?,?,?)"
//     const [{insertId}]=await db.execute(query, [name, role, email, phone])
//     return insertId
// })

// app.put("/employee/:id", async(req, res)=>{
//     const updateId= Number(req.params.id)
//     if(!updateId) return "not valid id"
//     const {name, role, email=null, phone=null}= req.body
//     const query= "update employee set name = ? , role = ? , email = ?, phone = ? where id= ?"
//     const [{changedRows}]= await db.execute(query, [name, role, email, phone, updateId])
//     return changedRows
// })
 

 


const start=async()=>{
    await db.getConnection()
    console.log("connected to the database successfully!");
    app.listen(port, ()=>console.log(`you are listening to port ${port}`))
}
start() 
