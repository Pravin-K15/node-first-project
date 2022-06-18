const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
    name: String,
    price: Number,
    category: String
});

const ProductModel = model("products", ProductSchema, "products")

module.exports = ProductModel;