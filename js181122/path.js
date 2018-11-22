

var path = require('path');

var dir = ['users', 'jun', 'test'];
var projDir = dir.join(path.sep);       // sep = seperate 구분자
console.log(projDir);

var exePath = path.join(projDir, 'test.ext');
console.log(exePath);

var dirName = path.dirname(exePath);
var baseName = path.basename(exePath);
var extName = path.extname(exePath);

console.log("Directory = %s", dirName);
console.log("Base name = %s", baseName);
console.log("Ext Name: %s", extName);



var savePath = "C:\Users\goya\Documents\Save";
var eventPath = "C:\Users\goya\Documents\Event";


