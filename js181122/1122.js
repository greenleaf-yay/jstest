var os = require("os");

console.log("Hostname: %s", os.hostname);
console.log("Memory: %d / %d", os.freemem(), os.totalmem());
console.log('CPU Info ---');
console.dir(os.cpus());
console.log("Network interface ---");
console.log(os.networkInterfaces());

var d = new Date();
console.log("Date: %s", d);