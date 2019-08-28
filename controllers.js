exports.hello = function hello() {
    console.log("Hello");
}

exports.loop = function loop(req, res) {
    console.log("Loop!");
    const t = new Date().getTime()+10*1000;
    while (new Date()<t) {
        
    }
    console.log("Concluído!");
    res.writeHead(200,{"Content-Type": "text/html", "enconding": "utf-8"});
    res.write("<h1>Loop concluído!");
    res.end();
    
}

exports.index  = function trataRequisicao(req, res) {
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<h1>Hello World!");
    res.end();
}

exports.notfound  = function (req, res) {
    res.writeHead(404, {"Content-Type":"text/html"});
    res.write(`
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Página não encontrada</title>
    </head>
    <body>
    <h1>Página não encontrada: ${req.url}`);
    res.end();
}


const exec = require("child_process").exec;
exports.ls = function (req, res) {
    let resposta = "vazia";
    exec("ls -la", function (err, stdout, stderr) {
        resposta = stdout;
        res.writeHead(200,{"Content-Type": "text/plain"});
        res.write(resposta);
        res.end();
    })
}