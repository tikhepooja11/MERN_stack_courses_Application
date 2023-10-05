import React, { useEffect, useState } from "react";
import Course from "./course";
import { toast } from "react-toastify";
import base_url from "../backendapi/bootapi";
import axios from "axios";

const Allcourses = () => {
  useEffect(() => {
    document.title = "Display courses || courses app";
  }, []);

  const getAllCoursesFromServer = () => {
    console.log("inside getAllCoursesFromServer()");
    axios.get(`${base_url}/courseRoute/getAllCourses`).then(
      (response) => {
        //success
        console.log("success " + response.data);
        toast.success("courses has been loaded from server", {
          position: "bottom-right",
        });
        setCourses(response.data);
      },
      (error) => {
        //error
        console.log("error" + error);
        toast.error("something went wrong", {
          position: "bottom-center",
        });
      }
    );
  };

  // calling loading course function
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const [courses, setCourses] = useState([]);

  const updateCourses = (title) => {
    setCourses(courses.filter((c) => c.title !== title));
  };

  return (
    <div>
      <h1>Allcourses </h1>
      <p>List of all courses are as follows</p>
      {courses.length > 0
        ? courses.map((item) => (
            <Course key={item.title} course={item} update={updateCourses} />
          ))
        : "No courses available"}
    </div>
  );
};

export default Allcourses;
