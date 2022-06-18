const express = require("express");
const app = express();
const ejs = require("ejs");
require("./db")
app.set("view engine", "ejs");

app.use(express.json())

//Routes
const HomepageRouter = require("./router/homepage")
const ProductRouter = require("./router/products")
const UserRouter = require("./router/user")

const PORT = 3000;

app.use("/", HomepageRouter);
app.use("/", ProductRouter);

//API 
app.use("/api/v1/user", UserRouter);

app.listen(PORT);