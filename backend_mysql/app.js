const express=require('express');
const bodyparser=require('body-parser');
const sql=require('mysql');

const conn=sql.createConnection({
    user:'testuser',
    password:'deep2403!@#&',
    host:"localhost",
    database:'student'
})
const app=express();

//middleware
app.use(bodyparser.json());
app.use(bodyparser)


//connection with the mysql database
conn.connect((err)=>{
    if(err){
        throw err;
    }else{
        console.log("connection made with the data base");
    }
});

conn.query('INSERT INTO testable  (num,textfield) VALUES (5,"My name is deepanshi singh")',function(err,result){
    if(err) throw err;
    else console.log("Item inserted succesfully");
});
conn.query('SELECT * from testable',function(err,result){
    if(err) throw err;
    else{
        var data=result;
        console.log(data[0].textfield);
    }
});


app.listen(3000,()=>{
      console.log("Listening at port 3000");
});