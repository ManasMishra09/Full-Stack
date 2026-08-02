//Creating a calcultor bases http server(/sum,/sub, /mul, /div) that supports 4 routes
//expressjs, hono, elysiajs, trpc

const express = require('express');

const app = express();

app.get("/sum")
app.get("/sub")
app.get("/mul")
app.get("/div")

app.listen(3000);