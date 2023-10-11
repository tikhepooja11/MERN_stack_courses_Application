const mongoose = require("mongoose");
// const employees = require("./employee");

mongoose.connect("mongodb://localhost:27017/coursesdb", (error) => {
  if (error) console.log(`Error in connection: ${error}`);
  else console.log(`Connected to DB`);
});
