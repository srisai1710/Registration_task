const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

const employeeSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true, 
    },
    gender:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    age:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    }
})

// employeeSchema.pre("save" , async function(next){
//     if(this.isModified("password")){
//         // const passwordHash = await bcrypt.hash(password, 10);
//         console.log(`the current password is ${this.password}`);
//         this.password = await bcrypt.hash(this.password, 10)
//         console.log(`the current password is ${this.password}`);
        
//         this.confirmpassword = undefined;
//     }
//     next()
// })

const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;