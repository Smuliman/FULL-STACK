var fs = require("fs");

console.log("Program started");
var data = fs.readFileSync('example.txt');
console.groupCollapsed(data.toString());



console.log("Program ended")