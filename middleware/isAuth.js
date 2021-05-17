const User = require("../models/User");
const jwt = require("jsonwebtoken");
const isAuth = async (req, res, next) => {
  try {
    //    import token
    // headers=> authorization
    const token = req.headers["authorization"];
    // console.log(token);
    //   si mathamch token
    // you are not authorized
    // on doit verifie si token est valide
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // test if the user exist with that id
    const user = await User.findOne({ _id: decoded.id }).select("-password");
    // you are not authorised
    if (!user) {
      return res
        .status(401)
        .send({ errors: [{ msg: "you are not authorized2" }] });
    }

    // si non
    // req bech nzid user W N9OLOU T3EDE ye3ni j'ai ttrouve l user mawjoud 7atitou fi requette w 3titou l'accèes lil private route
    req.user = user;
    // next
    next();
  } catch (error) {
    res.status(401).send({ errors: [{ msg: "you are not authorized" }] });
  }
};

module.exports = isAuth;

