var http = require('http');
var server = http.createServer();

var port = 3000;

server.listen(port, function(){         // listen = 포트번호 할당
    console.log("Start Server");
});

