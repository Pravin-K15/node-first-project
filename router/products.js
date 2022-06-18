const {Router} = require("express");
const router = Router();
const ProductModel = require("../schema/products")
const AuthMiddleware = require("../middleware/auth")

router.get("/products", function (req, res) {
    ProductModel.find()
    .then(function (docs) {
        res.render("products", { products: docs })
    })
    .catch(function(err){
        res.render("not-found")
    })
})

router.get("/products/api", AuthMiddleware, function (req, res) {
    ProductModel.find()
    .then(function (docs) {
        res.json(docs)
    })
    .catch(function(err){
        res.render("not-found")
    })
})

module.exports = router;