const express = require('express');
const app = express();
const axios = require('axios');
app.use(express.json());
// Post using fetch
async function main(){
   const response = await fetch("https://www.toptal.com/developers/postbin/1706261117587-5522551864851",
      {
      method : "POST",
   },
);
   const textualData = await response.text();
   console.log(textualData);
}


//Post using axios
async function main(){
   const response = await axios.post("https://www.toptal.com/developers/postbin/1706261117587-5522551864851");
   console.log(response.data);
}
main();
app.listen(3000);