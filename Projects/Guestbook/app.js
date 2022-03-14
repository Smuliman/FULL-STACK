const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
var bodyParser = require("body-parser");

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post("/newmessage", function (req, res) {
  //res.sendFile(__dirname + "//form.html");

  //siirretään bodyparserilla napatut lomake inputit muuttujiin
  var new_name = req.body.username;
  var new_country = req.body.country;
  var new_message = req.body.message;

  //haetaan data.jsonin tiedot muuttujaan data
  var data = require("./data.json");

  //esitellään muuttuja, johon tallenetaan lomakeinputiin syötetyt tiedot
  let newData = {
    id: data.length + 1,
    username: new_name,
    country: new_country,
    message: new_message,
  };

  //lisätään uudet tiedot json tiedostoon
  data.push(newData);

  res.send("Message sent!");
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
