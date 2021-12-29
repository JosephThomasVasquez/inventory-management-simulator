const router = require("express").Router();
const controller = require("./items.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

router
  .route("/:itemId")
  .get(controller.read)
  .delete(controller.delete)
  .all(methodNotAllowed);

module.exports = router;
