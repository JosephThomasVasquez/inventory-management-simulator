const router = require("express").Router();
const controller = require("./items.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);
router.route("/:itemId").get(controller.read).all(methodNotAllowed);

module.exports = router;
