const { default: mongoose } = require("mongoose");
const db = require("./models/db");
const cors = require("cors"); // Import the cors package
const express = require("express");
// const employeeRoute = require("./routes/employee");
const courseRoute = require("./routes/course");

// const responseTime = require('./middleware/responseTime')

const router = express(); //ask for router to express

// Allow middleware requests from 'http://localhost:3001'
router.use(cors({ origin: "http://localhost:3001" }));

router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

router.listen(3000, () => {
  console.log("Express server started on port : 3000");
});
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.use(responseTime);

// router.use(function(req, res, next) {
//     req.start = Date.now();
//     console.log("start time: "+req.start)

//     next();
//  });

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

// router.use("/employeeRoute", employeeRoute);
router.use("/courseRoute", courseRoute);

// router.use(function(req, res) {
//     var time = Date.now() - req.start;
//     console.log(time)
//     next()
// });
