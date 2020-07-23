const express = require("express");
const port = process.env.PORT || 8081;
const app = express();
const path = require("path")

var serveStatic = require('serve-static')

app.use(serveStatic(path.join(__dirname +"/dist/")));
app.get(/.*/, function(req, res){
    res.sendfile(__dirname + "/dist/index.html")
});

app.listen(port);
console.log("Server rodando!" + port);
