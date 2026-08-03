//Creating a calcultor bases http server(/sum,/sub, /mul, /div) that supports 4 routes
//expressjs, hono, elysiajs, trpc

const express = require('express');

const app = express();

app.get("/sum",function(req,res){
 const a = parseInt(req.query.a);
 const b = parseInt(req.query.b);

 const sum = a + b;
 res.json({
    ans : sum
 })

 app.get("/sub",function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);   

    const sub = a - b;
    res.json({
        ans : sub
    })
 }
})

app.listen(3000);