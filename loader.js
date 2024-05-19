const notes = require("./notes.js");
var _ = require("lodash");
console.log("server file is avilable");

var age = notes.age;

var result = notes.addNum(age, 14);
console.log(age);
console.log(result);

var data = ["person", "person", 1, 2, 1, 2, "name", "age", "2"];
var filter = _.uniq(data);
console.log(filter);

console.log(_.isString(true));
