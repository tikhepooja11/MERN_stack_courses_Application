import React from "react";
import { useState } from "react";

const ShimmerUI = () => {
  return (
    <div style={{ alignItems: "center", justifyContent: "center" }}>
      <h2 className="text-center">Displaying course details</h2>
      <div
        className="course-container"
        style={{
          backgroundColor: "#f0f0f0",
          width: "80%",
          height: "80%",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          textAlign: "center",
        }}
      ></div>
    </div>
  );
};

export default ShimmerUI;
