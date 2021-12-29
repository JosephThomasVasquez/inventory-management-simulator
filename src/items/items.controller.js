const itemsService = require("./items.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// ==============================================================================================
// Validation functions =========================================================================
// ==============================================================================================

const itemExists = async (req, res, next) => {
  //   get categoryId from req.params
  const { itemId } = req.params;

  // read category from db
  const item = await itemsService.read(itemId);

  // Check if category id is found
  if (item) {
    res.locals.item = item;
    return next();
  }

  next({ status: 404, message: "Item cannot be found." });
};

// =============================================================================================
// Resources functions =========================================================================
// =============================================================================================

// List all items
const list = async (req, res, next) => {
  try {
    const data = await itemsService.list();
    res.json({ data });
  } catch (error) {
    next(error);
  }
};

// Get category by id
const read = async (req, res) => {
  try {
    const { item: data } = res.locals;
    res.json({ data });
  } catch (error) {
    next(error);
  }
};

// create item
const create = async (req, res) => {
  try {
    const data = await itemsService.create(req.body.data);
    res.status(201).json({ data });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res) => {
  const { item } = res.locals;

  await itemsService.destroy(item[0].id);

  res.sendStatus(204);
};

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(itemExists), read],
  create: asyncErrorBoundary(create),
  delete: [asyncErrorBoundary(itemExists), asyncErrorBoundary(destroy)],
};
