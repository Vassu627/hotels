// function callback() {
//   console.log("KSDFH");
// }

const add = function (a, b, callback) {
  var result = a + b;
  console.log("results: " + result);
  callback();
};

add(2, 4, () => console.log("add completed"));
