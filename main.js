var prompt = require("prompt-sync")();
const age = prompt("Please enter your age: ");
if (age < 18) {
  console.log("Yo get a 20% discount");
} else {
  console.log("Yo don't get a 20% discount");
}
