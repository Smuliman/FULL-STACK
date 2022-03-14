const express = require("express");
const app = express();
const port = 3000;
var table_data;

app.use(express.static("./public"));

app.get("/Sam", function (req, res) {
  res.send("Hello Sam");
});

app.get("/guestbook", function (req, res) {
  //res.sendFile(__dirname + "//guestbook.html");
  var json = require("./data.json");
  var results = `<table border="1">
  <thead>
      <tr>
        <th>Username</th>
        <th>Country</th>
        <th>Message</th>
      </tr>
    </thead>`;
  for (var i = 0; i < json.length; i++) {
    results +=
      "<tr>" +
      "<td>" +
      json[i].username +
      "</td>" +
      "<td>" +
      json[i].country +
      "</td>" +
      "<td>" +
      json[i].message +
      "</td>" +
      "</tr>";
  }
  res.send(results);
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
