// var timeLimit = function (fn, t) {
//   return async function (...args) {
//     const originalFnPromise = fn(...args);

//     const timeoutPromise = new Promise((_, reject) => {
//       setTimeout(() => {
//         reject("Time Limit Exceeded");
//       }, t);
//     });

//     return Promise.race([originalFnPromise, timeoutPromise]);
//   };
// };

// const fn = async function (n) {
//   await new Promise((res) => {
//     setTimeout(res, 120);
//   });
//   return n * n;
// };
// const t = 100;
// const limited = timeLimit(fn, t);

// limited(4).then(console.log).catch(console.log);

console.log("India".slice(0,3));
console.log('ddd')
