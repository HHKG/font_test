const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const { appController } = require("./controller/controller");
server.use(express.static("page"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
appController(server);
server.listen(3333, () => {
  console.log("服务启动了,请访问localhost:3333/index.html");
});
