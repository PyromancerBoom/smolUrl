const express = require("express");
const { mongoose } = require("mongoose");
const app = express();

// const path = require("path");
// Use for production
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.post("/shortUrls", (req, res) => {});

app.listen(1337, () => {
  console.log("Server starting on 1337");
});
