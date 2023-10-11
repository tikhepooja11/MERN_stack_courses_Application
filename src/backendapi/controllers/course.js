const mongoose = require("mongoose");
const courseModel = require("../models/course");
const course = require("../models/course");

const createCourse = (request, response) => {
  console.log("inside createCourse()");
  const { id, title, description } = request.body;
  const newCourse = new courseModel({
    id,
    title,
    description,
  });

  return newCourse
    .save()
    .then((course) => response.send(course))
    .catch((error) => response.json("error in creating a new course " + error));
};

const getAllCourses = (request, response) => {
  console.log("inside getAllcourses()");
  return courseModel
    .find()
    .then((courses) => response.send(courses))
    .catch((error) => response.json("error in listing all courses " + error));
};

const getCourseById = (req, res) => {
  console.log(`inside getCourseById()`);
  const courseId = req.params.courseId;
  return courseModel
    .findOne({ id: courseId })
    .then((course) => res.send(course))
    .catch((error) =>
      res.status(404).send(error).json({ message: "course id not found" })
    );
};

const updateCourse = (req, res) => {
  console.log(
    `inside updateCourse() from backend   ":` + JSON.stringify(req.body)
  );
  const courseId = req.params.courseId;
  return courseModel
    .findOne({ id: courseId })
    .then((course) => {
      if (course) {
        course.set(req.body);
        return course
          .save()
          .then((course) => res.send(course))
          .catch((error) =>
            res
              .status(500)
              .send(error)
              .json({ message: "Internal server Error" })
          );
      } else {
        res
          .status(404)
          .json({ message: "Error in Updating course, course is Null" });
      }
    })
    .catch((error) =>
      res.status(404).send("course with this ID not found : " + error)
    );
};

const deleteCourse = async (req, res) => {
  const courseTitle = req.params.courseTitle;
  console.log(`inside deleteCourse()  :${courseTitle}`);

  return courseModel
    .findOneAndRemove({ title: courseTitle })
    .then((course) =>
      course
        ? res.status(201).json({ message: "Course deleted" })
        : res.status(404).json({ message: "Error in deleting course" })
    )
    .catch((error) => res.status(500).send("course id not found"));
};
module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  deleteCourse,
  updateCourse,
};
