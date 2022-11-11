const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const {adminAuth} = require("../middlewares/adminAuth")

const { ProductModel } = require("../models/Product.model");

const productsRoutes = Router();

productsRoutes.get("/", async (req, res) => {
  const products = await ProductModel.find();
  res.send(products);
});

productsRoutes.post("/create", adminAuth, async (req, res) => {
  const {
    id,
    title,
    brand,
    rating,
    mrp,
    price,
    quantity,
    images,
    colors,
    ddprice,
    productDesc,
    productFeatures,
    category,
    subcategory,
    flash,
    bestDeals,
    trending,
    newArrival,
  } = req.body;
  const product = new ProductModel({
    id,
    title,
    brand,
    rating,
    mrp,
    price,
    quantity,
    images,
    colors,
    ddprice,
    productDesc,
    productFeatures,
    category,
    subcategory,
    flash,
    bestDeals,
    trending,
    newArrival,
  });
  try {
    await product.save();
    res.send("product created");
  } catch (err) {
    res.send("something went wrong");
    console.log(err);
  }
});

productsRoutes.delete("/delete/:productId", adminAuth, async (req, res) => {
  const { productId } = req.params;
  const deletedProduct = await ProductModel.findOneAndDelete({
    _id: productId
  });
  if (deletedProduct) {
    res.status(200).send("Deleted");
  } else {
    res.send("couldn't delete");
    console.log(err)
  }
});

productsRoutes.patch("/edit/:productId", adminAuth, async (req, res) => {
  const { productId } = req.params;
  const updatedProduct = await ProductModel.findOneAndUpdate(
    { _id: productId},
    req.body
  );
  if (updatedProduct) {
    res.send(updatedProduct);
  } else {
    res.send("couldn't update");
  }
});

module.exports = {
  productsRoutes,
};
