const HttpPushPlugin = require("http-push-plugin");
// 服务端文件上传接口
const USER_RECEIVER = "http://ip:port/receiver";
// 上传文件目录
const UPLOAD_TO = "/home/**";

new HttpPushPlugin({
  receiver: USER_RECEIVER,
  to: UPLOAD_TO,
  ignoreDir: [],
});
