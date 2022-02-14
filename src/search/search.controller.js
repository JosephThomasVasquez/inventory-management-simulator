const searchService = require("./search.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const search = async (req, res, next) => {
  console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
  const searchTerm = Object.values(req.query).join("");
  console.log("req.query", searchTerm);

  let data = null;

  try {
    if (searchTerm) {
      data = await searchService.searchItem(searchTerm);
    } else {
      data = await searchService.list();
    }
  } catch (error) {
    next(error);
  }
  res.json({ data });
};

module.exports = { searchItems: asyncErrorBoundary(search) };
