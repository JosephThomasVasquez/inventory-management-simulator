const router = require("express").Router();
const controller = require("./userLogin.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/login").post(controller.login).all(methodNotAllowed);

module.exports = router;
