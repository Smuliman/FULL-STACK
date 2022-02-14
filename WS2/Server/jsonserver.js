var http = require("http");
var fs = require("fs");



var server = http.createServer(function(request,response){
    var data = require('./sampledata.json');

    if(request.url === "/"){
        response.writeHead(200,{'Content-Type': 'text/json'})
        response.write(JSON.stringify(data));
        
        
        response.end();
        }
    });

    var port = process.env.PORT || 3000;
server.listen(port);
console.log('Server is running at http://localhost:%d',port);