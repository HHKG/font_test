const MyPromise = require("./promiseOverride");

// let promise = new Promise((resolve, reject) => {
//   let targetData = {
//     name: "黄华康",
//     address: "麒麟新村",
//   };
//   setTimeout(() => {
//     resolve(targetData);
//   }, 2000);
//   reject("同样报错了");
// });
// promise.then(
//   (value) => {
//     console.log("resolve", value);
//   },
//   (reason) => {
//     console.log("resolve", reason);
//   }
// );

let myPromise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 2000);
});

// myPromise.then((resolve) => {
//   console.log(resolve);
// });
myPromise
  .then((value) => {
    console.log(1);
    console.log("resolve", value);
  })
  .then((value) => {
    console.log(2);
    console.log("resolve", value);
  })
  .then((value) => {
    console.log(3);
    console.log("resolve", value);
  });
