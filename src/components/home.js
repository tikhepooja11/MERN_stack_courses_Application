import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";

const Home = () => {
  useEffect(() => {
    document.title = "Home || courses app";
  }, []);
  return (
    <div>
      <div className="Jumbotron text-center container-fluid bg-light text-dark p-5 bg-primary mt-3">
        <h1 className="text-sky-600 font-bold"> TechPro IT-Software Courses</h1>
        <h4>
          Achieve your career goals with industry-recognized learning paths
        </h4>

        <p className="mt-4 text-justify">
          TechPro Courses is your one-stop solution for IT software professional
          training. Access a wide range of courses that cover programming
          languages, development tools, cybersecurity, and more. Learn at your
          own pace and enhance your skills for a successful IT career. A
          IT-Software portal for geeks. It contains well written, well thought
          and well explained computer science and programming articles, courses.
          We provide a variety of courses along with placement opportunity for
          you to learn, thrive and also have fun! Free Tutorials, Millions of
          Articles, Live, Online and Classroom Courses ,Frequent Coding
          Competitions ,Webinars by Industry Experts, Internship opportunities
          and Job Opportunities.
        </p>
        <Container>
          <Button tag="a" href="/view-courses" color="primary" className="mt-3">
            Start using{" "}
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Home;
