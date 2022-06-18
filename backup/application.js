const express = require("express");
const app = express();
// const ejs = require("ejs");
// const { readFile } = require("fs");
// require("./db")
// app.set("view engine", "ejs");

// const ProductModel = require("./schema/product")

const PORT = 3000;

app.get("/", function(req, res){
    console.log("in get method")
    res.render("Hello TCS!!!")
})
// app.get("/", function(req, res){
//     readFile("./phonebook.json", "utf-8", function(err, data){
//         const people = JSON.parse(data);
//         res.render("homepage", { people : people })
//     })
// })

// app.get("/search/:name", function(req, res){
//     const { params } = req;
//     const { name } = params

//     readFile("./phonebook.json", "utf-8", function(err,data){
//         const content = JSON.parse(data);
//         const found = content.filter(function(item){
//             return item.firstname.toLowerCase().includes(name.toLowerCase())''
//         })
//         res.render("homepage", {people : found})
//     })

// })

// app.get("/api/v1/phonebook", function(req, res){
//     readFile("./phonebook.json", "utf-8", function(err, data){
//         const people = JSON.parse(data);
//         res.json(people);
//     })
// })

// app.get("/products", function(req, res){
//     ProductModel.find().then(function(docs){
//         console.log(docs);
//         res.json(docs);
//     })
// })

app.listen(PORT);