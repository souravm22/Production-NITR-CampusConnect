const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    // bearer uhiuewhiuewhf so we are getting the second part

    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      // token decoded
      if (err) {
        return res.status(200).send({
          message: "Auth failed",
          success: false,
        });
      } else {
        req.body.userId = decode.id;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: "auth failed",
      success: false,
    });
  }
};
