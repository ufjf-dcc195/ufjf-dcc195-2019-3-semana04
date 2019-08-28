let http = require("http");

function trataRequisicao(req, res) {
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<h1>Hello World!");
    res.end();
}

let server = http.createServer(trataRequisicao);

server.listen(8888);

console.log("Servidor na porta http://localhost:8888");