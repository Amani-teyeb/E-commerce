const express = require("express");
const router = express.Router();
const { addItemsToCart } = require("../controllers/cart.controllers");
const { isAuth, userMiddleware} = require("../middleware/isAuth");
//const { isAuth} = require("../middleware/isAuth");




router.post("/addtocart",isAuth ,userMiddleware, addItemsToCart)
  
module.exports = router;