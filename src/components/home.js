import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";

const Home = () => {
  useEffect(() => {
    document.title = "Home || courses app";
  }, []);
  return (
    <div>
      <div className="Jumbotron text-center container-fluid bg-light text-dark p-5 bg-primary">
        <h1> Learncode with durgesh</h1>
        <p>
          A Computer Science portal for geeks. It contains well written, well
          thought and well explained computer science and programming articles,
          quizzes.We provide a variety of services for you to learn, thrive and
          also have fun! Free Tutorials, Millions of Articles, Live, Online and
          Classroom Courses ,Frequent Coding Competitions ,Webinars by Industry
          Experts, Internship opportunities and Job Opportunities.
        </p>
        <Container>
          <Button tag="a" href="/view-courses" color="primary">
            Start using{" "}
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Home;
