import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import base_url from "../backendapi/bootapi";
import { Form, Label, FormGroup, Input, Container, Button } from "reactstrap";

const Updatecourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  //    Fetch the previous data based on course id provided
  useEffect(() => {
    axios
      .get(`${base_url}/courseRoute/getCourseById/${id}`)
      .then((response) => {
        console.log(response.data);
        setTitle(response.data.title);
        setDescription(response.data.description);
      })
      .catch((error) => console.error("Error fetching course:", error));
  }, []);

  const handleUpdatedForm = (event) => {
    console.log("inside handleUpdatedForm");
    console.log(id);
    axios
      .patch(`${base_url}/courseRoute/updateCourse/${id}`, {
        title,
        description,
      })
      .then(
        (response) => {
          toast.success(
            "Congratulations..! Your course has been updated successfully",
            { position: "bottom-center" }
          );
          console.log(response.data);
        },
        (error) => {
          console.log("error");
          toast.error("Error in updating course", {
            position: "bottom-center",
          });
          console.log(error);
        }
      );
  };

  return (
    <div>
      <Fragment>
        <h1 className="text-center my-3">Update course details here </h1>
        <Form onSubmit={handleUpdatedForm}>
          <FormGroup>
            <label htmlFor="title">Course Title</label>
            <Input
              type="text"
              id="courseTitle"
              name="courseTitle"
              value={title} //  previous data fetched from database based on id provided
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            ></Input>
          </FormGroup>

          <FormGroup>
            <label htmlFor="description">Course Description</label>
            <Input
              type="textarea"
              id="description"
              name="description"
              style={{ height: 150 }}
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            ></Input>
          </FormGroup>

          <Container className="text-center">
            <Button type="submit" color="success">
              Update Course
            </Button>
          </Container>
        </Form>
      </Fragment>
    </div>
  );
};

export default Updatecourse;
