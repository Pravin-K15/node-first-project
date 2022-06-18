const {Router} = require("express");
const router = Router();
const { readFile } = require("fs");

router.get("/", function (req, res) {
    readFile("./phonebook.json", "utf-8", function (err, data) {
        const people = JSON.parse(data);
        res.render("homepage", { people: people })
    })
})

router.get("/search/:name", function (req, res) {
    const { params } = req;
    const { name } = params

    readFile("./phonebook.json", "utf-8", function (err, data) {
        const content = JSON.parse(data);
        const found = content.filter(function (item) {
            return item.firstname.toLowerCase().includes(name.toLowerCase());
        })
        res.render("homepage", { people: found })
    })
})
router.get("/api/v1/phonebook", function (req, res) {
    readFile("./phonebook.json", "utf-8", function (err, data) {
        const people = JSON.parse(data);
        res.json(people);
    })
})

module.exports = router;