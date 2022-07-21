require('dotenv').config();
const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const ejs=require('ejs')
const app=express();

// middleware

app.set('view engine','ejs');
app.use(express.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
//connection
mongoose.connect('mongodb://localhost:27017/userDB',function(err){
    if(err) throw err;
    else{console.log("Connection Made")};
});

// schema
const userSchema= new mongoose.Schema({
    user:String,
    email:String
});
//model
const User=new mongoose.model('User',userSchema);

// const user=new User({
//     user:"Deepanshi",
//     email:"singhdeepanshi2403@gmail.com"
// });
// user.save(function(err){
//     if(err) throw err;
//     else console.log("user inserted in database!");
// });
app.get('/',async(req,res)=>{
    const all=await User.find({});
    res.render('index',{users:all});
});

app.post('/',(req,res)=>{
    console.log(req.body.userName);
    const user= new User({
        user:req.body.userName,
        email:req.body.Email
    });
   user.save(function(err){
        if(err) throw err;
        else{
            console.log("new user added");
        }
    });
    res.redirect("/");
})

app.listen(3000,()=>{
    console.log("Server listening at port 3000");
});

