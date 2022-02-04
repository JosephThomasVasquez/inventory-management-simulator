const users = require("../utils/users_data");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// ==============================================================================================
// Validation functions =========================================================================
// ==============================================================================================

const userCredentialsIsValid = (req, res, next) => {
  const { username, password } = req.body.data;

  //   Password strength requirements - Strong Password
  const strongPasswordRequirements = {
    mininumLowercase: "(?=.*[a-z])", //   3. Password must contain at least 1 lowercase letter. (?=.*[a-z])
    minimumUppercase: "(?=.*[A-Z])", //   2. Password must contain at least 1 uppercase letter. (?=.*[A-Z])
    minimumDigits: "(?=.*[0-9])", //   4. Password must contain at least 1 number. (?=.*[0-9])
    minimumSpecialCharacter: "(?=.*[^A-Za-z0-9])", //   5. Password must contain at least 1 special character. ([^A-Za-z0-9])
    minimumCharacters: "(?=.{8,})", //   1. Password must be at least 8 characters in length. (?=.{8,})
  };

  const passwordCheck = Object.values(strongPasswordRequirements).join("");

  let isStrongPassword = new RegExp(passwordCheck);

  if (isStrongPassword.test(password)) {
    console.log("Entered password:", password);
  } else {
    console.log("Password is not strong enough");
  }

  //   console.log(checkPassword);

  return next();
};

const userExists = async (req, res, next) => {
  //   get categoryId from req.params
  const { itemId } = req.body;

  // read category from db
  const item = await itemsService.read(itemId);

  // Check if category id is found
  if (item) {
    res.locals.item = item;
    return next();
  }

  next({ status: 404, message: "User cannot be found." });
};

// =============================================================================================
// Resources functions =========================================================================
// =============================================================================================

const login = async (req, res, next) => {
  const { username, password } = req.body.data;
  console.log("body", req.body);

  try {
    const user = await users.find(
      (user) => username === user.username && password === user.password
    );
    console.log(user);

    if (user) {
      res.status(200).json({ data: user });
    } else {
      next({ status: 403, message: "User not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login: [asyncErrorBoundary(userCredentialsIsValid), login],
};
