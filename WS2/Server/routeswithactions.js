var http = require("http");

var server = http.createServer(function(request,response){

    if(request.url === "/"){
        response.writeHead(200,{'Content-Type': 'text/html'})
        response.write('<h1>The Beginning</h1>');
        response.end('Hello Jukka from home page')
    }
    

});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Server is running at http://localhost:%d',port);