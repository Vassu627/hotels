const express = require("express");
const app = express();
const db = require("./db");

app.get("/", function (req, res) {
  res.send("Hello world");
});

app.get("/chicken", (req, res) => {
  var customized = {
    name: "biryani",
    size: "full",
  };
  res.send(customized);
});

app.post("/i", (req, res) => {
  console.log("Data is saved"); // Logging the incoming data
  res.send("Data received and saved"); // Sending response back
});

app.listen(2000, () => {
  console.log("Listening on port 2000");
});
