const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "reacted";
class MyPromise {
  constructor(executor) {
    // 捕获执行器中的代码，如果执行器中有代码错误，那么Promise的状态要变为失败
    try {
      // executor是一个执行器，进入后会立即执行，并传入resolve和reject方法
      executor(this.resolve, this.reject);
    } catch (error) {
      // 如果有错误直接执行reject
      this.reject(error);
    }
  }
  status = PENDING;
  value = null;
  reason = null;
  //储存成功回调函数
  // onFulfilledCallback = null;这种存储只能存储一次then执行结果
  onFulfilledCallback = []; //用于存储多种then运行结果
  //储存失败回调函数
  // onRejectedCallback = null;这种存储只能存储一次then执行结果
  onRejectedCallback = []; //用于存储多种then运行结果

  resolve = (val) => {
    if (this.status === PENDING) {
      //只有状态是等待的时候，才执行状态更改
      this.status = FULFILLED;
      this.value = val;
      // 存在就执行
      while (this.onFulfilledCallback.length) {
        // Array.shift()取出第一个元素后执行(val),shift不是一个纯函数，取出元素后，数组会失去这个元素
        this.onFulfilledCallback.shift()(val);
      }
    }
  };
  reject = (val) => {
    if (this.status === PENDING) {
      // 只有状态为等待的时候，才执行状态更改
      this.status = REJECTED;
      this.reason = val;
      // 存在就执行
      while (this.onRejectedCallback.length) {
        // Array.shift()取出第一个元素后执行(val),shift不是一个纯函数，取出元素后，数组会失去这个元素
        this.onRejectedCallback.shift()(val);
      }
    }
  };
  // 这种then写法无法使用链式调用,
  // then(onFulFilled, onRejected) {
  //   // 判断状态
  //   if (this.status === FULFILLED) {
  //     onFulFilled(this.value);
  //   } else if (this.status === REJECTED) {
  //     onRejected(this.reason);
  //   } else if (this.status === PENDING) {
  //     // 因为不知道后面的状态变化情况，所以将成功回调和失败回调存储起来，等到执行成功失败函数的时候再传递
  //     this.onFulfilledCallback.push(onFulFilled);
  //     this.onRejectedCallback.push(onRejected);
  //   }
  // }
  // 这个写法符合链式调用的要求
  then(onFulFilled, onRejected) {
    // 如果不传，就使用默认函数
    onFulFilled =
      typeof onFulFilled === "function" ? onFulFilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };
    // 为了链式调用，这里直接创建一个实例化MyPromise对象,并在后面return出去
    const myPromise2 = new MyPromise((resolve, reject) => {
      // 这里的内容在执行器中，会立即执行
      if (this.status === FULFILLED) {
        // 创建一个微任务等待myPromise2完成初始化
        queueMicrotask(() => {
          // then执行的时候错误捕获
          try {
            // 获取成功回调函数的执行结果
            const x = onFulFilled(this.value);
            // 传入resolvePromise集中处理
            resolvePromise(myPromise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
        // 获取成功的回调函数的执行结果
        // const x = onFulFilled(this.value);
        // 传入resolvePromise集中处理
        // resolvePromise(myPromise2, x, resolve, reject);
      } else if (this.status === REJECTED) {
        // 创建一个微任务等待myPromise2完成初始化
        queueMicrotask(() => {
          try {
            //调用失败回调，并且把原因返回
            const x = onRejected(this.reason);
            // 传入resolvePromise集中处理
            resolvePromise(myPromise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      } else if (this.status === PENDING) {
        this.onFulfilledCallback.push(() => {
          queueMicrotask(() => {
            try {
              // 调用失败回调，并且把原因返回
              const x = onFulFilled(this.reason);
              resolvePromise(myPromise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });
        this.onRejectedCallback.push(() => {
          queueMicrotask(() => {
            try {
              // 调用失败回调，并且把原因返回
              const x = onRejected(this.reason);
              resolvePromise(myPromise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });
      }
    });
    return myPromise2;
  }
}
function resolvePromise(myPromise2, x, resolve, reject) {
  // 如果then方法返回的是自己的Promise对象，则会发生循环调用，这个时候程序会报错，在这里做个判断
  if (myPromise2 === x) {
    return reject(
      new TypeError("Chaining cycle detected for promise #<Promise>")
    );
  }
  // 判断x是不是MyPromise实例对象
  if (x instanceof MyPromise) {
    // 执行x,调用then方法,目的是将状态变为fulfilled或者rejected，x.then(value=>resolve(value),reason=>reject(reason))
    x.then(resolve, reject);
  } else {
    //普通值
    resolve(x);
  }
}
module.exports = MyPromise;
// let promise = new MyPromise();
// console.log(promise.MyPromise("自定义构造函数"));

// class Person extends MyPromise {
//   constructor(props) {
//     super(props);
//   }
//   getParentProps = () => {
//     console.log("执行到这里");
//     console.log(
//       this.name,
//       this.age,
//       this.resolve("成功！"),
//       this.reject("失败！")
//     );
//   };
// }
// let person = new Person();
// person.getParentProps();
