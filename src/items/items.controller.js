const itemsService = require("./items.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

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

module.exports = {
  list: asyncErrorBoundary(list),
};
