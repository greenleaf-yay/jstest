


var fs = require('fs');     // fs = 파일을 읽고 쓰기 위한 모듈

// read files
var data = fs.readFile('../README.md', 'utf-8', function(err, data){
    console.log("DATA = " + data);
});

// write on files
fs.writeFile('./output.txt', 'Hello World', function(err){      // parameter = target file name, contents, function(err)
    if (err) {
        console.log('Error : ' + err);
    }
    console.log("complete writing!");
});