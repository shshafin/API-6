// const ride1 = new Promise((resolve, reject) => {
//   resolve(404);
// });

// ride1.then((data) => console.log(data));

// const ride2 = new Promise((resolve, reject) => {
//   reject("error");
// });

// ride2.catch((err) => console.log("err:", err));

const ride = new Promise((resolve, reject) => {
  const num = Math.floor(Math.random() * 10);
  console.log(num);

  if (num < 5) {
    resolve(2829);
  } else {
    reject("No data available");
  }
});

ride
  .then((data) => console.log(data + 10))
  .catch((err) => console.log("error:", err));

//   promise === asynchronous function
