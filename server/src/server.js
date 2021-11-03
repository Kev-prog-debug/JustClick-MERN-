const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
require("dotenv").config();
//Set static folder
app.use(express.static(path.join(__dirname, "../", "public")));
//body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Add router middleware
app.use(
  "/",
  require(path.join(__dirname, "../", "routes", "routes_controller.js"))
);
//Set template engine
app.set("views", "src/view"); //change view directory to the src folder
app.set("view engine", "ejs");

app.listen(PORT, () => console.log(`Server is listening on the port ${PORT}`));
