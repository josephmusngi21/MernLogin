const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { MONGO_URL, PORT } = process.env;

mongoose
  .connect(MONGO_URL, { userNewUrlParser: true, userUnifiedTopology: true })
  .then(() => console.log("MongoDB is connected successfuly"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}}`);
});

app.use(
  cors({
    origin: ["http://localhost:4000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
