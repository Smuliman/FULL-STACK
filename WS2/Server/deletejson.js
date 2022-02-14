var http = require("http");
var fs = require("fs");

var data = require('./dataset.json');
delete data[0];
fs.writeFile('dataset.json', JSON.stringify(data), function (err) {
  if (err) throw err;
  console.log('New file created');
});

