const express = require("express");
const server = express();
server.use(express.static("page"));
server.all("/getIndexData.json", (req, res) => {
  res.json({ name: "黄华康1" });
});
server.all("/getDataList.json", (req, res) => {
  res.json([{ name: "黄华康" }]);
});
server.listen(3333, () => {
  console.log("服务启动了,请访问localhost:3333/index.html");
});
