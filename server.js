

const express = require("express");

const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
require("dotenv").config();

const connect = require("./src/configs/db");


const flightController = require("./src/controllers/flight.controllers");
const signupController=require("./src/controllers/signup.controllers")


app.use("/flights", flightController);
app.use("./signup", signupController);
// app.set("views", path.join(__dirname, "views/"));

app.get("/", async (req, res) => {
  try {
    return res.redirect("/flights/");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});



app.listen(process.env.PORT||5000, async () => {
  await connect();
  console.log("listening to port 5000");
});
