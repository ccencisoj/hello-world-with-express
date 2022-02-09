const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res)=> {
  res.end("Hola mundo");
});

app.listen(port, ()=> 
  console.log(`Server listening on port ${port}`));