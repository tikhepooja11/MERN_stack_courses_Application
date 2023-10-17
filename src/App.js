import "./App.css";
import { Row, Col, Container } from "reactstrap";
import { ToastContainer } from "react-toastify";
import Home from "./components/home";
import Header from "./components/header";
import Allcourses from "./components/Allcourses";
import Addcourse from "./components/Addcourse";
import Updatecourse from "./components/Updatecourse";
import Menus from "./components/Leftmenubar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./components/contactus";
import ErrorPage from "./components/errorpage";
import DisplayCourse from "./components/DisplayCourse";
function App() {
  // const showToastMessage = () => {
  //   toast("displaying toast message", {
  //     position: toast.POSITION.BOTTOM_CENTER,
  //   });
  // };

  return (
    <div>
      {/* <Header />

      <Home />

      <Allcourses />

      <Addcourse /> */}
      <ToastContainer />

      <Router>
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/add-course" element={<Addcourse />} exact />
                <Route path="/view-courses" element={<Allcourses />} exact />
                <Route
                  path="/update-course/:id"
                  element={<Updatecourse />}
                  exact
                />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/getcoursebyid/:id" element={<DisplayCourse />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
