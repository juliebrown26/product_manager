const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Must enter product title"], minlength: [3, "Title must be at least 3 characters long."] },
    price: { type: Number, required: [true, "Must enter a product price"] },
    image_url: { type: String, required: [true, "Please supply a produce image URL address"] },
}, {timestamps: true});
module.exports = mongoose.model("Product", ProductSchema);