const express = require("express");
require('dotenv').config();


const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("This is twitter page...");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at chai aur code</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
