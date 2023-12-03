// synchronous == maintain the serial
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5, "\n");

// asynchronous == not maintain the serial
console.log("async", 1);
console.log(2);
setTimeout(() => {
  console.log("yes");
}, 1000);
console.log(4);
console.log(5);
