function a() {
  console.log("a");
  b();
  console.log("aa");
}
function b() {
  console.log("b");
  d();
  console.log("bb");
}
function d() {
  console.log("d");
  console.log("dd");
}

a();

// a b d dd bb aa


// web apis == waiting for time up
// then callback queue stored
// finally event loop take the function from callback queue and call the function on call stack