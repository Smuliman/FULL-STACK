var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request,response){

    if(request.url === "/"){
        response.writeHead(200,{'Content-Type': 'text/html'})
        
        response.end('<p>Nothing to see hear</p>');
    } else if(request.url === "/frontpage") {
        fs.readFile('frontpage.html', function(err, data){
            response.writeHead(200,{'Content-Type': 'text/html'});
            response.write(data);
            return response.end();
        });
    }else if(request.url === "/contacts") {
        fs.readFile('contacts.html', function(err, data){
            response.writeHead(200,{'Content-Type': 'text/html'});
            response.write(data);
            return response.end();
        });
    } else if(request.url === "/plaintext") {
        fs.readFile('plain.txt', function(err, data){
            response.writeHead(200,{'Content-Type': 'text/plain'});
            response.write(data);
            return response.end();
        });
    } else if(request.url === "/json") {
        //fs.readFile('sampledata.json', function(err, data){
            var data = require('./sampledata.json');
            response.writeHead(200,{'Content-Type': 'application/json'});
            //var data = require('./sampladata.json');
            var output = JSON.stringify(data);
            response.write(output);
            return response.end();
        
    }
    

});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Server is running at http://localhost:%d',port);