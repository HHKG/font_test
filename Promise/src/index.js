console.log("webpack默认入口文件");
async function test() {
  return new Promise((resolve, reject) => {
    let name = "黄华康";
    resolve(name);
  });
}
async function main() {
  return await test();
}
console.log();
