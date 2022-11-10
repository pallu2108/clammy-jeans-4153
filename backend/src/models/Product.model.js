const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  brand: { type: String, required: true },
  rating: { type: Number, required: true },
  mrp: { type: Number, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  images: { type: Array, required: true },
  colors: { type: Array, required: true },
  ddprice: { type: Map, required: true },
  productDesc: { type: Map, required: true },
  productFeatures: { type: Map, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  flash: { type: Boolean, default: false },
  bestDeals: { type: Boolean, default: false },
  trending: { type: Boolean, default: false },
  newArrival: { type: Boolean, default: false },
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = {
  ProductModel,
};
