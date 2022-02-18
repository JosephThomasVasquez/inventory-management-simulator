const categoriesService = require("./categories.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// ==============================================================================================
// Validation functions =========================================================================
// ==============================================================================================

const categoryExists = async (req, res, next) => {
  //   get categoryId from req.params
  const { categoryId } = req.params;

  // read category from db
  const category = await categoriesService.read(categoryId);

  // Check if category id is found
  if (category) {
    res.locals.category = category;
    return next();
  }

  next({ status: 404, message: "Category cannot be found." });
};

// Has req.body data
const hasValidProperties = (req, res, next) => {
  if (!req.body.data)
    return next({
      status: 400,
      message: `Missing data from the request body.`,
    });

  next();
};

const hasValidFormData = (req, res, next) => {
  const { name = {}, description = {} } = req.body.data;

  if (name.length < 2) {
    return next({
      status: 400,
      message: `Name must contain 2 or more characters.`,
    });
  }

  if (description.length < 2) {
    return next({
      status: 400,
      message: `Description must contain 2 or more characters.`,
    });
  }

  next();
};

// =============================================================================================
// Resources functions =========================================================================
// =============================================================================================

// List all categories
const list = async (req, res, next) => {
  try {
    const data = await categoriesService.list();
    res.json({ data });
  } catch (error) {
    next(error);
  }
};

// List items in category
const listCategoryItems = async (req, res, next) => {
  const category = res.locals.category[0].id;

  try {
    const data = await categoriesService.listCategoryItems(category);
    res.json({ data });
  } catch (error) {
    next(error);
  }
};

// Get category by id
const read = async (req, res) => {
  try {
    const { category: data } = res.locals;
    res.json({ data });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const data = await categoriesService.create(req.body.data);

    res.status(201).json({ data });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const { id } = res.locals.category[0];

  console.log("body:", req.body.data);
  // console.log("locals:", res.locals.category);

  const updatedCategory = { ...req.body.data, id };

  const data = await categoriesService.update(updatedCategory);

  res.json({ data });
};

module.exports = {
  list: asyncErrorBoundary(list),
  listCategoryItems: [
    asyncErrorBoundary(categoryExists),
    asyncErrorBoundary(listCategoryItems),
  ],
  read: [asyncErrorBoundary(categoryExists), read],
  create: [
    asyncErrorBoundary(hasValidProperties),
    asyncErrorBoundary(hasValidFormData),
    asyncErrorBoundary(create),
  ],
  update: [asyncErrorBoundary(categoryExists), asyncErrorBoundary(update)],
};
