var jwt = require("jsonwebtoken");
const usertable = require("../module/userdetailtable");
const path = require("path");

// console.log(decoded.id);
exports.authentication = async (req, res, next) => {
  try {
    console.log("i am authentication");
    const token = req.header("Authorization");
    var decoded = jwt.verify(token, "secretkey");

    const userdetail = await usertable.findByPk(decoded.userid);
    if (userdetail === null) {
      console.log("this is not valid user");

      res.status(401).send({ success: false, msg: "user not found" });
    } else {
      req.user = userdetail;
      next();
    }
  } catch (error) {
    console.log("very bad feeling");
    res.status(401).send({ success: false, msg: "user is not valid" });
  }
};
