import axios from "axios";
import { useEffect, useState } from "react";
import base_url from "../backendapi/bootapi";
const useCourseInfo = (id) => {
  const [courseInfo, setCourseInfo] = useState(null);

  useEffect(() => {
    fetchCourseById();
  }, []);

  const fetchCourseById = async () => {
    const data = await fetch(`${base_url}/courseRoute/getCourseById/${id}`);
    const jsonData = await data.json();
    setCourseInfo(jsonData);
  };
  return courseInfo;
};

export default useCourseInfo;
