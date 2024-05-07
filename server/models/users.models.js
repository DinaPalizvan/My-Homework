const db= require("../db/connection")


const getAllUsersModel= async()=>{
    const query="select * from employee"
    const [users]= await db.execute(query)
    return users;
}


const createUserModel= async({
    name, 
    role,
    email= null,
    phone= null,
})=>{
    const query= "insert into employee(name, role, email, phone) values(?,?,?,?)"
    const [{insertId}]= await db.execute(query, [name, role, email, phone])
    return insertId
}



module.exports={
    getAllUsersModel,
    createUserModel
} 