console.log("estamos aqui server.js");
const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.get("/", function(req, res) {
  console.log("requisição realizada");
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port);
