// import axios from "axios";
// import qs from "qs";
const axios = require("axios");
console.log(process.env.NODE_ENV);
// 项目环境
if (process.env.NODE_ENV === "development") {
  console.log(development);
}
