import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import useCourseDates from "../utilities/useCourseDates";
import useCourseInfo from "../utilities/useCourseInfo";

const DisplayCourse = () => {
  const { id } = useParams();

  const courseInfo = useCourseInfo(id); // custom hook

  const { formattedStartDate, formattedEndDate } = useCourseDates(); // custom hook

  if (courseInfo === null) return <ShimmerUI />;

  const title = courseInfo?.title;
  const description = courseInfo?.description;

  return (
    <div style={{ alignItems: "center", justifyContent: "center" }}>
      <h2 className="text-center">Displaying course details</h2>
      <div
        className="course-container"
        style={{
          backgroundColor: "#f0f0f0",
          width: "80%",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <h3>course title : {title}</h3>
        <p>Description : {description}</p>
        <p>Instructor : John Doe</p>
        <p>Duration : 8 weeks</p>
        <p>Start date - {formattedStartDate}</p>
        <p>End Date - {formattedEndDate} </p>
        <p>Price : 200$</p>
        <p>Reviews or Ratings: 5 stars</p>
      </div>
    </div>
  );
};

export default DisplayCourse;
