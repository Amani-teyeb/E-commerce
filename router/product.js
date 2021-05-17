//const express= require ("express");
//const router = express.Router(); 
//router.post("/create" , Create);
const Create = require ('../controllers/product.controllers')
const express = require("express");
const router = express.Router();
const Product = require('../models/Product')

router.post("/create", async(req,res)=>{
    try {
        const product = new Product({...req.body})
            
        const createdProduct = await product.save();
        res.status(200).send({ msg: "created succ", product: product});
  } catch (error) {
    console.log(error)
    res.status(500).send({ errors: [{ msg: "fail to create product" }] });
  }
});
    
module.exports = router;
