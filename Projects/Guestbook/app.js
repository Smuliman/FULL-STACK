const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("./public"));

app.get("/Sam", function (req, res) {
  res.send("Hello Sam");
});

app.get("/guestbook", function (req, res) {
  res.send("Hello guest");
});

app.get("/newmessage", function (req, res) {
  res.send("Hello new message");
});

app.get("/ajaxmessage", function (req, res) {
  res.send("Hello ajax");
});

app.get("*", function (req, res) {
  res.send("Can't find the requested page", 404);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
