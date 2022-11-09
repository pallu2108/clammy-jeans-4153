const express = require("express");
const Cart = require("../models/Cart.model");

const cartRoutes = express.Router();

cartRoutes.get("/", async (req, res) => {
    const cartItem = await Cart.find({ userId: req.body.userId }).populate(["userId", "productId"]);
    res.send(cartItem);
  });
  
  cartRoutes.post("/", async (req, res) => {
    const { quantity, productId, userId } = req.body;
    const item = new Cart({
      quantity,
      productId,
      userId,
    });
    try {
      await item.save();
      res.send("Item created");
    } catch (err) {
      res.send("something went wrong");
      console.log(err);
    }
  });

module.exports = cartRoutes;
