const express = require('express');

const app = express();

app.use(express.json());

app.get("/",function(req,res){
    res.sendFile("D:/Full Stack Course/Html/index.html");
})
//Sending data from body,. we have three ways by query parameter, path parameter and body parameter. Below is the body parameter version of the route
app.post("/sum",function(req,res){
 const a = parseInt(req.body.a);
 const b = parseInt(req.body.b);

 const sum = a + b;
 res.json({
    ans : sum
 })
}) 
//Below is the path parameter version of the above route 
app.get("/sub/:a/:b",function(req,res){
 const a = parseInt(req.params.a);
 const b = parseInt(req.params.b);

 const sub = a - b;
 res.json({
    ans : sub
 })
})

app.listen(3000);