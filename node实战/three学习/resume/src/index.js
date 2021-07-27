// var express = require("express");
// var path = require("path");
// var app = express();
// app.use(express.static(path.join(__dirname, "public")));
// app.listen(3030);

var express = require("express");
var path = require("path");
var app = express();
app.use(express.static("public"));
app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});
app.listen(3030, function () {
  console.log("服务已启动！");
});
