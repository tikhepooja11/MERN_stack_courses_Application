require("dotenv").config();
const cors = require("cors"); // Import the cors package
const express = require("express");
const mongoose = require("mongoose");
const courseRoute = require("./routes/course");

const router = express(); //ask for router to express

//now connect to mongoDB ...
mongoose
  .connect(process.env.MONGO_URL, {
    retryWrites: true,
    w: "majority",
  })
  .then(() => {
    console.log(`connected to mongoDB dataBase`);
  })
  .catch((error) => {
    console.log(`Unable to connect to DB`);
    console.log(error);
  });

const PORT = process.env.PORT || 3030;
console.log(PORT);

router.listen(PORT, () => {
  console.log(`server started on port : ${PORT}`);
});

// Allow middleware requests from 'http://localhost:3001'
router.use(
  cors({
    origin: [
      // "http://localhost:3001",
      "https://reactjs-frontend-courses.onrender.com",
    ],
  })
);

router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.use(responseTime);

router.get("/", function (req, res) {
  // res.send('api working');
  console.log("api working");
});

function responseTime(req, res, next) {
  console.log(`pooja inside responseTime`);
  var reqStartime = Date.now();
  console.log(req.method, "\t" + req.url + "\t" + reqStartime);

  res.on("finish", function () {
    console.log("inside setting header");
    var duration = Date.now() - reqStartime;
    // log duration
    console.log(`request details\n\n`);
    console.log(`METHOD        : ${req.method},
                    \nURL          : ${req.url},
                    \nSTARTTIME    : ${reqStartime},
                    \nTOTAL DURATION:  ${duration} ms`);
  });
  next();
}

router.use("/courseRoute", courseRoute);
