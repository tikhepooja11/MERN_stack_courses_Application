const express = require("express");
const router = express.Router();
const CourseController = require("../controllers/course");

router.get("/getAllCourses", CourseController.getAllCourses);
router.get("/getCourseById/:courseId", CourseController.getCourseById);
router.post("/createCourse", CourseController.createCourse);
router.patch("/updateCourse/:courseId", CourseController.updateCourse);
router.delete("/deleteCourse/:courseTitle", CourseController.deleteCourse);
module.exports = router;
