const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const productSchema = new Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  name: {type: String, required: true},
  description: String,
  image_url: {type: String, default: "https://st2.depositphotos.com/4060975/9124/v/600/depositphotos_91245802-stock-illustration-shopping-cart-colored-vector-illustration.jpg"},
  price: {type: Number, required: true},
}, {
  timestamps: true
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;