const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models/");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", { useNewUrlParser: true });

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(logger("dev"));

app.get("/exercise", ({ body }, res) => {
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
  });

app.get("/stats", ({ body }, res) => {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
  
  });

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

db.Workout.create({type:"test"})
.then(db => {
    console.log(db);
  })
