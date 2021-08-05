const fs = require("fs");
fs.readdir("/Users/wb798061/Desktop/测试上传文件/index", (err, file) => {
  file.forEach((_item) => {
    if (_item === "index.js") {
      fs.readFile(
        "/Users/wb798061/Desktop/测试上传文件/index" + "/" + _item,
        (err, data) => {
          console.log(data.toString(), "--------------------");
        }
      );
    } else {
      console.log(_item);
    }
  });
});
