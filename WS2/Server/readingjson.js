var http = require("http");
var fs = require("fs");

var data = require('./sampledata.json');
console.log(data);

data.push ({
    name: 'John Doe',
    age: '52',
    company: 'Laurea',
    address: 'Ratatie 22'
})
console.log(data);

fs.writeFile('dataset.json', JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log('New file created');
  });

  var data = require('./dataset.json');
  delete data[0];
  fs.writeFile('dataset.json', JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log('New file created');
  });

