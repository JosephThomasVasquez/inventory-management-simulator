const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");

// Home screen
const welcome = (req, res) => {
  res.status(200).send("<h4>Connected</h1>");
};

router.route("/").get(welcome).all(methodNotAllowed);

module.exports = router;
