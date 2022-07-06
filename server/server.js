const express = require("express");
const { mongoose } = require("mongoose");
const ShortUrl = require("./models/short");
const app = express();

mongoose.connect("mongodb://localhost/urlShortner", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", async (req, res) => {
  const shortUrls = await ShortUrl.find();
});

app.post("/shortUrls", async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl });
  res.redirect("/");
});

app.listen(1337, () => {
  console.log("Server starting on 1337");
});

// const path = require("path");
// Use for production
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });
