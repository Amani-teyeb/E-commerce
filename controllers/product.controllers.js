const Product = require('../models/Product');
exports.Create = async (req, res) => {
    try {
        const product = new Product({...req.body})
            
            const createdProduct = await product.save();
        res.status(200).send({ msg: "created succ", product: newProduct});
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "fail to create product" }] });
  }
};