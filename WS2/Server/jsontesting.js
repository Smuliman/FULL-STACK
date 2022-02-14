var http = require("http");
var fs = require("fs");



/* console.log("<table border='1'>");
for (var i=0; i < data.length; i++) {
    console.log("<tr>");
    console.log("<td>"+data[i].name+"</td>");
    console.log("<td>"+data[i].age+"</td>");
    console.log("<td>"+data[i].company+"</td>");
    console.log("<td>"+data[i].address+"</td>");
    console.log("</tr>");
} */

var server = http.createServer(function(request,response){
    var data = require('./sampledata.json');

    if(request.url === "/"){
        response.writeHead(200,{'Content-Type': 'text/html'})
        response.write("<table border='1'>");
        
        for (var i=0; i < data.length; i++) {
            response.write("<tr>");
            response.write("<td>"+data[i].name+"</td>");
            response.write("<td>"+data[i].age+"</td>");
            response.write("<td>"+data[i].company+"</td>");
            response.write("<td>"+data[i].address+"</td>");
            response.write("</tr>");
        
            
            
        }
        return response.end();
  }
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Server is running at http://localhost:%d',port);

