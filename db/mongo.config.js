const mongoose = require('mongoose');
require("dotenv").config()


// Connect to a Database using Mongoose and a Connection String

const db = async (uri) => {
  // write your code here
  try { 
    await mongoose.connect(uri)
  } catch (error) {
    console.log(error);
  }
};

module.exports = { db };
