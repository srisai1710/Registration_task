const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0/Regis");
const conn= mongoose.connection;
conn.once('open',()=>{
    console.log("database successfully connected");
})
conn.on('error',()=>{
    console.log('error');
    process.exit();
})