const express = require("express");
const router = express.Router();
const { addCartegory, getCartegories } = require("../controllers/category.controllers");

//const { isAuth} = require("../middleware/isAuth");




router.post("/create", addCartegory)



router.get("/get", getCartegories);

  
module.exports = router;