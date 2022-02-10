var fs = require("fs");

console.log("Program started");
var data = fs.readFileSync('example.txt');


fs.writeFile('mynewfile.txt', data, function (err) {
    if (err) throw err;
    console.log('Replaced!');
  }); 

var data = fs.readFileSync('example2.txt');


fs.appendFile('mynewfile.txt', data, function (err) {
    if (err) throw err;
    console.log('updated!');
  }); 

  fs.readFile('mynewfile.txt', results);
  
  function results(err, data){
    if(err) return console.error(err);
    console.log("results are fileread: ");
    console.log(data.toString());
}


console.log("Program ended");