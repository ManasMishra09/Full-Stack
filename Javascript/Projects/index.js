const express = require('express');
const app = express();
let requestCount = 0;


function middleware (req,res,next){
   requestCount++;
   next();
}

app.get("/requestCount", function(req,res){
   res.send({
      requestCount
   })
})

app.use(middleware); //globslly defined; Worked for all the below routes.
app.use(express.json());
//middlewares


app.get("/multiply", function(req,res){
   const a = parseInt(req.query.a);
   const b = parseInt(req.query.b);

   const ans = a * b;
   res.json({
      ans : ans
   })
})

app.get("/status",function(req,res){
   res.send("up")
})




app.listen(3000);