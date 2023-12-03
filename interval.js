// console.log("async", 1);
// console.log(2);
// setTimeout(() => {
//   console.log("yes");
// }, 1000);
// console.log(4);
// console.log(5);

console.log("async", 1);
const timeoutId = setTimeout(() => {
  console.log("hello");
}, 3000);

let num = 0;
const intervalId = setInterval(() => {
  console.log("number - ", num++);
  if (num === 10) {
    clearInterval(intervalId);
  }
}, 1000);
console.log(4);
console.log(5);

// clearInterval(intervalId) == clear the interval
// clearTimeout(timeoutId) == clear the timeout
