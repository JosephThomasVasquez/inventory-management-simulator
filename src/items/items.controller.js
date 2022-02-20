const itemsService = require("./items.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// ==============================================================================================
// Validation functions =========================================================================
// ==============================================================================================

const itemExists = async (req, res, next) => {
  //   get categoryId from req.params
  const { itemId } = req.params;

  console.log("itemId", itemId);

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

// const search = async (req, res, next) => {
//   console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
//   const searchTerm = req.query;
//   console.log("req.query", req.query);

//   let data = null;

//   try {
//     if (searchTerm) {
//       data = await itemsService.searchItem(searchTerm);
//     } else {
//       data = await itemsService.list();
//     }
//   } catch (error) {
//     next(error);
//   }
//   res.json({ data });
// };

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
const create = async (req, res, next) => {
  try {
    const data = await itemsService.create(req.body.data);
    res.status(201).json({ data });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const { id } = res.locals.item;

  const updatedItem = { ...req.body.data, id };

  const data = await itemsService.update(updatedItem);

  console.log("Updated DATA: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", data);

  res.json({ data });
};

const destroy = async (req, res) => {
  const { item } = res.locals;

  await itemsService.destroy(item.id);

  res.sendStatus(204);
};

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(itemExists), read],
  create: asyncErrorBoundary(create),
  update: [asyncErrorBoundary(itemExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(itemExists), asyncErrorBoundary(destroy)],
};
