const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const productSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: {type: String, required: true},
    description: String,
    image_url: String,
    price: {type: Number, required: true},
}, {
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;