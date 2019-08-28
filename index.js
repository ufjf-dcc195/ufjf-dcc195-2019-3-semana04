const server = require("./server");
const router = require("./router");
const controllers = require("./controllers");

const rotas = {};
rotas["/"] = controllers.index;
rotas["/index.html"] = controllers.index;
rotas["/hello.html"] = controllers.hello;
rotas["/loop.html"] = controllers.loop;
rotas["/ls.html"] = controllers.ls;
rotas["404"] = controllers.notfound;


server.start(router.route, rotas);
