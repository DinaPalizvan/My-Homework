const mysql= require("mysql2")
const dotenv= require("dotenv")
dotenv.config()


const {DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_DATABASE}= process.env


const db = mysql.createPool({
        user: DB_USER,
        password: DB_PASS,
        host: DB_HOST,
        port: DB_PORT,
        database: DB_DATABASE
    })

module.exports= db.promise()