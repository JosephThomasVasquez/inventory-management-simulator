const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const userLoginService = require("./userLogin.service");
const bcrypt = require("bcryptjs");
const passport = require("passport");

// ==============================================================================================
// Validation functions =========================================================================
// ==============================================================================================

// VALIDATION / Has request.body
const hasValidProperties = (req, res, next) => {
  if (!req.body.data)
    return next({
      status: 400,
      message: `Missing data from the request body.`,
    });

  next();
};

// VALIDATION / Has password requirements
const passwordIsValid = (req, res, next) => {
  const { password, confirm_password } = req.body.data;

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

  if (!isStrongPassword.test(password)) {
    return next({
      status: 400,
      message: `Password ${password} is not strong enough.`,
    });
  }

  console.log("Entered password:", password);
  res.locals.password = password;
  res.locals.confirmPassword = confirm_password;
  next();
};

const passwordsDoNotMatch = (req, res, next) => {
  if (res.locals.user.password !== res.locals.user.confirm_password) {
    console.log("Entered password:", res.locals.user.password);
    console.log("confirm password:", res.locals.user.confirm_password);
    return next({
      status: 400,
      message: `Passwords do not match.`,
    });
  }

  next();
};

// Encrypt Password
const encryptPassword = async (req, res, next) => {
  console.log("got password:", res.locals.password);

  const hashedPassword = await bcrypt.hash(res.locals.password, 10);

  if (hashedPassword) {
    console.log("hashedPass:", hashedPassword);

    res.locals.user.password = hashedPassword;
    return next();
  }

  next({
    status: 400,
    message: `Error excrypting password.`,
  });
};

const userEmailExists = async (req, res, next) => {
  const user = req.body.data;
  console.log("body:", user.email);

  // search for email in database
  const emailExists = await userLoginService.searchByEmail(user.email);
  console.log("Found user:", emailExists);

  if (emailExists) {
    return next({
      status: 400,
      message: `A user with email "${user.email}" already exists.`,
    });
  }

  res.locals.user = user;

  next();
};

const userExists = async (req, res, next) => {
  //   get categoryId from req.params
  const { email } = req.body.data;

  // read category from db
  const user = await userLoginService.read(email);

  // Check if category id is found
  if (user) {
    console.log("Found user:", user);
    res.locals.user = user;
    return next();
  }

  next({ status: 404, message: "Cannot find user." });
};

// =============================================================================================
// Resources functions =========================================================================
// =============================================================================================

// List Users, Search User by Username
const list = async (req, res, next) => {
  const { search } = req.query;
  console.log("search:", search);

  let data = null;

  if (search) {
    data = await userLoginService.searchByUsername(search);
  } else {
    data = await userLoginService.list();
  }

  console.log("data:", data);

  res.json({ data });
};

const read = async (req, res, next) => {
  const data = res.locals.user;

  console.log("data:", data);

  res.json({ data });
};

const create = async (req, res, next) => {
  // Remove confirm_password since we do not need to store it.
  delete res.locals.user.confirm_password;

  try {
    const data = await userLoginService.create(res.locals.user);
    console.log("finalData:", data);

    res.status(201).json({ data });
  } catch (error) {
    next(error);
  }
};

const checkPassport = async (req, res, next) => {
  console.log("Checking Passport");
  const auth = await passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });

  console.log("auth:", auth);

  res.send({ data: { auth, message: "Successfully authenticated" } });
};

const isAuthenticated = (req, res, next) => {};

// Login User
const login = async (req, res, next) => {
  const { username, password } = req.body.data;
  console.log("res.locals.user:", req.locals.user);
  console.log("body:", req.body.data);

  // next({ status: 403, message: "User not found" });
};

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(userExists), asyncErrorBoundary(read)],
  create: [
    asyncErrorBoundary(hasValidProperties),
    asyncErrorBoundary(userEmailExists),
    asyncErrorBoundary(passwordIsValid),
    asyncErrorBoundary(passwordsDoNotMatch),
    asyncErrorBoundary(encryptPassword),
    asyncErrorBoundary(create),
  ],
  login: [asyncErrorBoundary(checkPassport)],
};
