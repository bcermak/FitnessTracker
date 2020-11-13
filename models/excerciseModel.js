const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ExcerciseSchema = new Schema({
   day:{
    type: Date,
    default: Date.now
   },
   person:{
       type: Date,
       default:Date.now
   }
})

const Workout = mongoose.model("Workout", ExcerciseSchema);

module.exports = Workout;