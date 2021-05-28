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

const myPromise = new MyPromise((resolve, reject) => {
  resolve("succ");
  // reject("reject");
  // throw new Error("执行错误");
});
myPromise
  .then((value) => console.log(value))
  .then((value) => console.log(value))
  .then((value) => console.log(value));

// myPromise
//   .then(
//     (value) => {
//       console.log(1);
//       console.log("resolve", value);
//       throw new Error("then error");
//     },
//     (reason) => {
//       console.log(2);
//       console.log(reason.message);
//     }
//   )
//   .then(
//     (value) => {
//       console.log(3);
//       console.log(value);
//     },
//     (reason) => {
//       console.log(4);
//       console.log(reason.message);
//     }
//   );

// myPromise.then(
//   (value) => {
//     console.log(1);
//     console.log("resolve", value);
//   },
//   (reason) => {
//     console.log(2);
//     console.log(reason.message);
//   }
// );

// const p1 = myPromise.then((value) => {
//   console.log(1);
//   console.log("resolve", value);
//   return p1;
// });
// p1.then(
//   (value) => {
//     console.log(2);
//     console.log("resolve", value);
//   },
//   (reason) => {
//     console.log(3);
//     console.log(reason.message);
//   }
// );
