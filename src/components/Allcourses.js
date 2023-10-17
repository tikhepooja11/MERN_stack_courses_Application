import React, { useEffect, useState } from "react";
import Course from "./course";
import { toast } from "react-toastify";
import base_url from "../backendapi/bootapi";
import axios from "axios";
import useOnlineStatus from "../utilities/useOnlineStatus";

const Allcourses = () => {
  useEffect(() => {
    document.title = "Display courses || courses app";
  }, []);

  const getAllCoursesFromServer = async () => {
    await axios.get(`${base_url}/courseRoute/getAllCourses`).then(
      (response) => {
        console.log("success " + response.data);
        toast.success("courses has been loaded from server", {
          position: "bottom-right",
        });
        setCourses(response.data);
      },
      (error) => {
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

  //  check online status of user
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h4 className="text-center mt-10">
        Looks like you're offline !! Please check your internet connection
      </h4>
    );
  }
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
