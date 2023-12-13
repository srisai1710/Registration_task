const express= require("express");
const path=require("path");
const app=express();
const hbs=require("hbs");
require("./db/conn");
const Register=require("./models/registers");

const { json } = require("express");
const port=process.env.PORT||3000;

const templates_path=path.join(__dirname ,"../templates/views");
const partial_path=path.join(__dirname ,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(express.static("public"));
app.set("view engine","hbs");
app.set("views",templates_path);
hbs.registerPartials(partial_path);


app.get("/",(req,res)=>{
    res.render("index")
});

app.get("/register",(req,res)=>{
    res.render("register");
})
app.post("/register",async(req,res)=>{
    try{
        const password=req.body.password;
        
        const cpassword=req.body.confirmpassword;
        if(password==cpassword){
            const registerEm=new Register({
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                gender:req.body.gender,
                phone:req.body.phone,
                age:req.body.age,
                password:password,
                confirmpassword:cpassword
            })
            const registered=await registerEm.save();
            res.status(201).render("index");
        }else{
            res.send("password not matched");
        }
    }catch(error){
        res.status(400).send(error);
    }
})

app.get("/login",(req,res)=>{
    res.render("login");
})

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})