const fs = require("fs");
const appController = (server) => {
  server.all("*", (req, res, next) => {
    //设为指定的域
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("X-Powered-By", " 3.2.1");
    next();
  });
  server.post("/readTargetFile.json", (req, res) => {
    const { fileUrl } = req.body;
    fs.readdir(`${fileUrl}`, (err, file) => {
      console.log(file);
      // file.forEach((_item) => {
      //   fs.readFile(`${fileUrl}/${_item}`, (err, data) => {
      //     res.json({ fileContext: data.toString() });
      //   });
      // });
    });
  });
};
module.exports = { appController };
