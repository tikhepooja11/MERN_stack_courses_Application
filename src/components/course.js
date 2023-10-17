import axios from "axios";
import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Button,
  Container,
  CardBody,
} from "reactstrap";
import base_url from "../backendapi/bootapi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Course = ({ course, update }) => {
  const deleteCourse = (title) => {
    console.log("course title    :   " + title);
    axios.delete(`${base_url}/courseRoute/deleteCourse/${title}`).then(
      (response) => {
        console.log("course deleted succesfully :" + response.data);
        toast.success("course deleted");
        update(title);
      },
      (error) => {
        //error
        console.log("error in deleting a course :" + error);
        toast.error("Could not delete course");
      }
    );
  };

  return (
    <div>
      <Card className="text-center">
        <CardBody>
          <CardTitle className="font-weight-bold">
            {course.title} Course
          </CardTitle>
          {/* <img alt="Card cap" width="25%" src="https://picsum.photos/318/180" /> */}
          <CardText>{course.description}</CardText>
          <Container className="text-center mt-2">
            <Button
              color="danger"
              onClick={() => {
                deleteCourse(course.title);
              }}
            >
              Delete
            </Button>
            <Button color="warning ms-2" href={`/update-course/${course.id}`}>
              Update
            </Button>
            <Button className="ms-2" href={`/getcoursebyid/${course.id}`}>
              Start learning
            </Button>
          </Container>
        </CardBody>
      </Card>
      <br></br>
    </div>
  );
};

export default Course;
