const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res)=> {
  res.end("Hola mundo");
});

app.listen(port, "0.0.0.0", ()=> 
  console.log(`Server listening on port ${port}`));