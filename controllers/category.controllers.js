const Category = require ('../models/Category');

exports.addCartegory = async(req, res) => {
    try {
      const {name}= req.body;
      const categoryExist = await Category.findOne({name})
      if (categoryExist) {
        return res
          .status(400)
          .send({ errors: [{ msg: `${name} already exists` }] });
      }
      const cat = new Category({...req.body});
      await cat.save();
      res.status(200).send({ msg: "created succ", category: cat});
    } catch (error) {
      console.log(error)
    res.status(500).send({ errors: [{ msg: "fail to create category" }] });
      
    }
};


exports.getCartegories = async(req, res) => {
  try {
    const categories =await Category.find();
   // try to create list of categories
    res.status(200).send({ msg: "All categories", categories: categories});
  } catch (error) {
    console.log(error)
  res.status(500).send({ errors: [{ msg: "fail to get categories" }] });
    
  }
};

 
  