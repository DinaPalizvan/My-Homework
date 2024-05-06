const db= require("../db/connection")


const getAllUsersModel= async()=>{
    const query="select * from employee"
    const [users]= await db.execute(query)
    return users;
}













module.exports={getAllUsersModel}