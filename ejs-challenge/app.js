//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");//to get the ejs to be working we have to install it in the npm install ejs
const _ =require("lodash");// to get lodash we have to install lodash
const { lowerCase } = require("lodash");
const { request } = require("express");
const mongoose =require('mongoose');


const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

// const array=[homeStartingContent,aboutContent,contactContent];

const app = express();
app.use(express.urlencoded({extended: true}));//to be able to post things that we neter in a form and get the ans in the action part we have to write the page we want to retrieve the information and method is post

app.use(express.static("public"));// to use static files 

app.set('view engine', 'ejs');
//connect to mongoose

mongoose.connect("mongodb://localhost:27017/blogDB",{useNewUrlParser:true,useUnifiedTopology: true});
//schema
const postSchema = new mongoose.Schema({
     title:String,
     body:String
});
//model definition
const Post=new mongoose.model("Post",postSchema);
app.get("/",function(req,res)
{
     Post.find({},function(err,foundList){
           if(err){
             console.log(err);
           }
           else{
               res.render("home",{paragraph:homeStartingContent,lists:foundList}); 
           }
     });
     
});
//route parameters
app.get("/posts/:postId",function(req,res){
   const requestedPostId=req.params.postId;
   Post.findOne({_id:requestedPostId},function(err,post){
        if(!err){
          res.render("post",{
            title:post.title,
            content:post.body
          });
        }
   });
});

app.get("/about",function(req,res)
{
  res.render("about" ,{paragraph:aboutContent});
});

app.get("/contact",function(req,res)
{
  res.render("contact" ,{paragraph:contactContent});
});
app.get("/compose",function(req,res)
{
  res.render("compose");
});
app.post("/compose",function(req,res){
  const post=new Post ({
    title:req.body.postTitle,
    body :req.body.postBody
  });
  post.save(function(err){
    if(!err){
      res.redirect("/");
    }
  });
   //res.redirect("/");
});
app.listen(3000, function() {
  console.log("Server started on port 3000");
});


// db.products.insertOne(
//   {
//     _id:2,
//     name:"Deepanshi",
//     price:0.8,
//     stock:32,
//     reviews:[
//       {
//         author:"Pranav",
//         rating:5,
//         review:"Awesome !"
//       },
//       {
//         author:"Ayush",
//         rating:6,
//         review:"Awesome !"
//       }
//     ]
//   }
// )