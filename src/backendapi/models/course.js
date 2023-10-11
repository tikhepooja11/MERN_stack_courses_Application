const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const courseSchema = new Schema({
  id: { type: String },
  title: { type: String },
  description: { type: String },
});

module.exports = mongoose.model("Course", courseSchema, "courses");
