const {Schema, model}= require("mongoose")

const memberSchema= new Schema({
    name: String,
    age: Number,
    gender: String,
    exp: Number,
    type: String,
    qualification: String
})

module.exports= model("Member", memberSchema)