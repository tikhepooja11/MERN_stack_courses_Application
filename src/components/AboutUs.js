import React from "react";
import { CardSubtitle, Container } from "reactstrap";
import { Card, CardTitle, CardText, Button, CardBody } from "reactstrap";
import MapWithMarkers from "../utilities/about us/MapWithMarkers";

const AboutUs = () => {
  const locations = [
    { name: "New York Office", coordinates: [40.7128, -74.006] },
    { name: "London Office", coordinates: [51.5074, -0.1278] },
    // Add more locations as needed
  ];

  return (
    <div>
      <span className="mt-4">Our Online Bootcamp</span>
      <h3>An immersive learning experience</h3>
      <Container className=" justify-center mb-10 flex flex-wrap border border-black mt-5  bg-green-300  max-h-full">
        <Card className=" m-4 bg-sky-100 text-center justify-center mx-auto rounded-lg overflow-hidden shadow-lg  hover:border-black  hover:cursor-pointer w-25 h-20">
          <CardBody className="">
            <CardTitle className="font-weight-bold text-xl font-bold mb-2">
              Develop skills for real career growth{" "}
            </CardTitle>
            <img data-src="https://www.simplilearn.com/ice9/assets/home/v1.gif"></img>
            <CardText>
              Cutting-edge curriculum designed in guidance with industry and
              academia to develop job-ready skills
            </CardText>
          </CardBody>
        </Card>

        <Card className=" m-4 bg-sky-100 text-center justify-center mx-auto rounded-lg overflow-hidden shadow-lg  hover:border-black  hover:cursor-pointer w-25 h-20">
          <CardBody className="">
            <CardTitle className="font-weight-bold text-xl font-bold mb-2">
              Learn from experts active in their field, not out-of-touch
              trainers
            </CardTitle>
            <CardText>
              Leading practitioners who bring current best practices and case
              studies to sessions that fit into your work schedule.
            </CardText>
          </CardBody>
        </Card>

        <Card className=" m-4 bg-sky-100 text-center justify-center mx-auto rounded-lg overflow-hidden shadow-lg  hover:border-black  hover:cursor-pointer w-25 h-20">
          <CardBody className="">
            <CardTitle className="font-weight-bold text-xl font-bold mb-2">
              Learn by working on real-world problems
            </CardTitle>
            <CardText>
              Capstone projects involving real world data sets with virtual labs
              for hands-on learning
            </CardText>
          </CardBody>
        </Card>
      </Container>

      {/* <div>
      <h1 className="m-3 p-3 font-bold ">Our Global Offices</h1>
      <MapWithMarkers locations={locations}/>
      </div> */}
    </div>
  );
};

export default AboutUs;
