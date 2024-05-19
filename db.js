const mongoose = require("mongoose");

const mongoURL = "mongodb://127.0.0.1:27017/studentdb";

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.once("error", (err) => {
  console.error("mongodb connection error: ", err);
});

db.on("diconnected", () => {
  console.log("MongoDb discconnected");
});
module.exports = db;
