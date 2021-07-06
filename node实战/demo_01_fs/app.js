const fs = require("fs");

//1.fs.stat 检测是文件还是目录
fs.stat("./html", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(`是文件：${data.isFile()}`);
  console.log(`是目录：${data.isDirectory()}`);
});

// 创建目录 fs.mkdir
fs.mkdir("./css", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("创建成功！");
});

// 创建以及写入文件 fs.writeFile()
fs.writeFile("./html/index.html", "你好node.js", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("创建写入成功！");
});

// fs.appendFile
