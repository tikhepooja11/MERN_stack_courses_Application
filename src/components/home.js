import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";

const Home = () => {
  useEffect(() => {
    document.title = "Home || courses app";
  }, []);
  return (
    <div>
      <div className="Jumbotron text-center container-fluid bg-light text-dark p-5 bg-primary mt-3">
        <h1 className="text-sky-600 font-bold"> Learncode with durgesh</h1>
        <h4>
          Achieve your career goals with industry-recognized learning paths
        </h4>
        <p className="mt-2">
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
