const router = require("express").Router();
const controller = require("./search.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.searchItems).all(methodNotAllowed);

module.exports = router;
