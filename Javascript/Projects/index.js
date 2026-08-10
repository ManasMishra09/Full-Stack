//Creating a calcultor bases http server(/sum,/sub, /mul, /div) that supports 4 routes
//expressjs, hono, elysiajs, trpc

const express = require('express');

const app = express();
//http://localhost:3000/sum?a=10&b=20 this is a query parameter.
//But if we need to give the values in the form of path parameter then we can use /sum/:a/:b but req.params.a

app.get("/sum",function(req,res){
 const a = parseInt(req.query.a);
 const b = parseInt(req.query.b);

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