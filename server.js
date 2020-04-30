const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();

// app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.get("/download/:name", (req, res) => {
  const { name = "" } = req.params;
  res.sendFile(
    path.join(__dirname, "build", "download", name.replace(/\./g, ""))
  );
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port);
