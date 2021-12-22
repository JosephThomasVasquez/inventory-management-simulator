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

module.exports = {
  list: asyncErrorBoundary(list),
  listCategoryItems: [asyncErrorBoundary(categoryExists), listCategoryItems],
  read: [asyncErrorBoundary(categoryExists), read],
};
