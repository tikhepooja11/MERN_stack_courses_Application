import logo from "./logo.svg";
import "./App.css";
import { Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

<ToastContainer />;
{
  /* <h1>Simple Courses Application</h1>
<p>Click on this button to show my toast message</p>
<Button color="success" size="lg" onClick={showToastMessage}>
  show toast
</Button> */
}

function App() {
  const showToastMessage = () => {
    toast("displaying toast message", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  return (
    <div>
      <ToastContainer />
      <h1>Simple Courses Application</h1>
      <p>Click on this button to show my toast message</p>
      <Button color="success" size="lg" onClick={showToastMessage}>
        show toast
      </Button>
    </div>
  );
}

export default App;

// App1.js

// import logo from "./logo.svg";
// import "./App.css";
// import { Button } from "reactstrap";
// import { ToastContainer, toast } from "react-toastify";
// import Home from "./components/home";
// import Course from "./components/course";
// function App() {
//   const showToastMessage = () => {
//     toast("displaying toast message", {
//       position: toast.POSITION.BOTTOM_CENTER,
//     });
//   };

//   return (
//     <div>
//       <ToastContainer />
//       {/* <h1>Simple Courses Application</h1>
//       <p>Click on this button to show my toast message</p>
//       <Button color="success" size="lg" onClick={showToastMessage}>
//         show toast
//       </Button> */}
//       <Home />
//       <Course
//         course={{
//           title: "Java",
//           description:
//             "Java programming tutorial is designed for students and working professionals.",
//         }}
//       />
//       <Course
//         course={{
//           title: "Java",
//           description:
//             "Java programming tutorial is designed for students and working professionals.",
//         }}
//       />
//     </div>
//   );
// }

// export default App;
