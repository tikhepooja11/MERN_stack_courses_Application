import axios from "axios";
import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Button,
  Container,
  CardBody,
  Row,
  Col,
  CardSubtitle,
} from "reactstrap";
import base_url from "../backendapi/bootapi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItems, removeItems } from "../utilities/Redux-store/cartSlice";
import StarRating from "./StarRating";

const Course = ({ course, update }) => {
  const { ratings } = course;
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

  //  once clicked on add-to-cart dispatch an action using useDispatch hook
  const dispatch = useDispatch();

  const handleAddToCartAction = (course) => {
    console.log("inside handleAddToCartAction :");
    console.log(course);
    // dispatch(removeItems("JSX"));
    dispatch(addItems(course));
  };

  // const starRatings = useStarRatings(4);

  return (
    // <Container className=" flex flex-wrap  mt-5  bg-orange-400">
    <Card className=" m-4 bg-sky-100 text-center justify-center mx-auto rounded-lg overflow-hidden shadow-lg  hover:border-black  hover:cursor-pointer max-w-screen-sm ">
      <CardBody className="bg-black rounded shadow p-4 text-white">
        <CardTitle className="ml-5 font-weight-bold text-xl font-bold mb-2">
          {course.title} Course
        </CardTitle>
        <CardSubtitle className="text-right">
          {<StarRating ratings={course.ratings} />}
        </CardSubtitle>

        <img
          // src="https://mindqsystems.com/wp-content/uploads/2019/08/Core-Java-Training.jpg"
          src={course.img}
          alt="Card Image"
          className="max-w-md rounded-lg ml-20 h-32 object-cover"
        />

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
          <Button
            color="primary"
            className="ms-2"
            href={`/getcoursebyid/${course.id}`}
          >
            Start learning
          </Button>
          <Button
            className="ms-2 bg-green-200 "
            onClick={() => handleAddToCartAction(course)}
          >
            Add to Cart
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
};

//  higher order course component - a function which will enhance the basic component & returns it.
// that new component is arrow function with inside returns some jsx in it.
// passing props to it so that all the properties it. key, course, updatecourse fun will be passed as it is.
export const freeLabelCourseComponent = (Course) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute bg-red-500 text-white p-2 rounded-lg text-center">
          Free course
        </label>
        <Course {...props} />
      </div>
    );
  };
};

export default Course;
