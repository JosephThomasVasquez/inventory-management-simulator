const router = require("express").Router();
const controller = require("./userLogin.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/login").post(controller.login).all(methodNotAllowed);
router.route("/:userId").get(controller.read).all(methodNotAllowed);

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
