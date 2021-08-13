const fs = require("fs");
const path = require("path");

//递归获取项目目录以及文件内容
const getProjectDir = (_targetObj, fileUrl, file) => {
  file.forEach((_item, index) => {
    if (path.extname(_item) || _item.indexOf(".") !== -1) {
      //如果是文件，就读取文件内容
      fs.readFile(`${fileUrl}/${_item}`, (err, data) => {
        if (!err) {
          _targetObj[`${_item}`] = data.toString();
        }
      });
    } else {
      //这里是文件夹，继续读取文件夹，直到获取到文件
      if (
        _item === "node_modules" ||
        _item === ".DS_Store" ||
        _item === ".git"
      ) {
        return;
      }
      _targetObj[`${_item}`] = {};
      setTimeout(() => {
        fs.readdir(`${fileUrl}/${_item}`, (err, data) => {
          if (data && data.length > 0) {
            getProjectDir(_targetObj[`${_item}`], `${fileUrl}/${_item}`, data);
          } else {
            _targetObj[`${_item}`] = {};
          }
        });
      }, 100);
    }
  });
};

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
    const _targetObj = {};
    const fileUrlArr = fileUrl.split(path.sep);
    const fileName = fileUrlArr[fileUrlArr.length - 1];
    _targetObj[`${fileName}`] = {};
    fs.readdir(`${fileUrl}`, (err, file) => {
      getProjectDir(_targetObj[`${fileName}`], fileUrl, file);
      setTimeout(() => {
        res.json({
          message: "请求成功！",
          success: true,
          data: _targetObj,
        });
      }, 2000);
    });
  });
};
module.exports = { appController };
