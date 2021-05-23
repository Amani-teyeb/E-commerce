const Product = require('../models/Product');

const shortid = require('shortid');

exports.createProduct = async(req, res) => {
  try {
        const {
        productName, productDesc, productPrice, productCategory, productQty} = req.body;
        const {filename}= req.file;
        const product = new Product({
          filename= filename,
          productName,
          productDesc,
          productPrice,
          productCategory,
          productQty,

          
        })
        const createdProduct = await product.save();
        res.status(200).send({ msg:`${productName} was created`, product: createdProduct});
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "fail to create product" }] });
  }
};