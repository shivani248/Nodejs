// const { write } = require('fs');
const http = require('http');
http.createServer((req , res)=>{
    res.write("<h1>Hello i am server</h1>");
    res.end();
}).listen(4000);