
const express = require("express");
const { createProduct } = require("../controllers/product.controllers");
const { isAuth } = require("../middleware/isAuth");
const router = express.Router();
const multer = require('multer');
const shortid = require("shortid");
const path = require ('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), "uploads")); // uploads the folder that i went my images to be stored in
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname);
    },
  });
  
  const upload = multer({ storage });
  


router.post("/create",isAuth, upload.single('productImage'), createProduct)



//router.get("/get", getCartegories);

  
module.exports = router;
