const fs = require("fs");
const path = require("path");
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
      file.forEach((_item, index) => {
        if (path.extname(_item)) {
          //如果是文件，就读取文件内容
          fs.readFile(`${fileUrl}/${_item}`, (err, data) => {
            _targetObj[`${fileName}`][`${_item}`] = data.toString();
          });
        } else {
          //这里是文件夹，继续读取文件夹，直到获取到文件
          _targetObj[`${fileName}`][`${_item}`] = {};
          setTimeout(() => {
            fs.readdir(`${fileUrl}/${_item}`, (err, data) => {
              if (data && data.length > 0) {
                data.forEach((_childItem) => {
                  if (path.extname(_childItem)) {
                    //如果是文件，就读取文件内容
                    fs.readFile(
                      `${fileUrl}/${_item}/${_childItem}`,
                      (err, _childData) => {
                        _targetObj[`${fileName}`][`${_item}`][`${_childItem}`] =
                          _childData.toString();
                      }
                    );
                  } else {
                    _targetObj[`${fileName}`][`${_item}`][`${_childItem}`] = {};
                  }
                });
              } else {
                _targetObj[`${fileName}`][`${_item}`] = {};
              }
            });
          }, 1000);
        }
      });
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
