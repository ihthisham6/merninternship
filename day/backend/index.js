const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes/route");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", routes);
// DB Connectiona

    mongoose.connect("mongodb+srv://raafeecs21:ihthi1234@cluster1.mgu7arh.mongodb.net/")
  
  .then(() => {
    console.log("Database is Connected Successfully 😎");
  })
  .catch((err) => {
    console.log(err, "Something Went Wrong");
  });

// Test API
app.get("/test", (req, res) => {
  res.send("Hello Hitaish, This is Test Api 😎");
});

app.listen(5000, () => {
  console.log("Server Is Running On Port 5000");
});



