import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Form, Label, FormGroup, Input, Container, Button } from "reactstrap";
import base_url from "../backendapi/bootapi";
import { toast } from "react-toastify";

const Addcourse = () => {
  useEffect(() => {
    document.title = "Add courses || courses app";
  }, []);

  const [course, setCourse] = useState({});
  const handleForm = (event) => {
    postDataToServer(course);
    setCourse({ id: "", title: "", description: "" }); //  clear the fields
    event.preventDefault();
  };

  const postDataToServer = (data) => {
    console.log("inside posting data ");
    axios.post(`${base_url}/courseRoute/createCourse`, data).then(
      (response) => {
        toast.success(
          "Congratulations..! Your course has been added successfully",
          { position: "bottom-center" }
        );
        console.log(response.data);
      },
      (error) => {
        console.log("error");
        toast.error("Error in adding course", { position: "bottom-center" });
        console.log(error);
      }
    );
  };
  return (
    <Fragment>
      <h1 className="text-center my-3">Fill course details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label>Course Id</Label>
          <Input
            type="text" //number
            id="courseId"
            name="courseId"
            placeholder="Enter here"
            onChange={(event) => {
              setCourse({ ...course, id: event.target.value });
            }}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label>Course Title</Label>
          <Input
            type="text"
            id="courseTitle"
            name="courseTitle"
            placeholder="Enter course title here"
            onChange={(event) => {
              setCourse({ ...course, title: event.target.value });
            }}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label>Course Description</Label>
          <Input
            type="textarea"
            id="description"
            name="description"
            placeholder="Enter course description here"
            style={{ height: 150 }}
            onChange={(event) => {
              setCourse({ ...course, description: event.target.value });
            }}
          ></Input>
        </FormGroup>

        <Container className="text-center">
          <Button type="submit" color="success">
            Add Course
          </Button>
          <Button
            type="reset"
            color="warning ms-2"
            onClick={(event) => setCourse({})}
          >
            Clear/Reset
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default Addcourse;
