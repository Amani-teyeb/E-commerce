const Cart = require('../models/Cart')

exports.addItemsToCart = async(req,res)=>{
    try {
      const findCart = await Cart.findOne({user: req.user._id});
      
      if (findCart) {
        // if cart already exist then update cart by quantity
        return  Cart.findOneAndUpdate({ user: req.user._id},{
          "$push": req.body.cartItems

          }
        );
      }

      // if cart  not exist then update cart by quantity
      const cart = new Cart({
        user: req.user._id,
        cartItems: [req.body.cartItems]
      })
      await cart.save();
      res.status(200).send("succ to add items to cart")  
    } catch (error) {
        console.log(error)
    res.status(500).send({ errors: [{ msg: "fail to cradd items to cart" }] });
    }
}