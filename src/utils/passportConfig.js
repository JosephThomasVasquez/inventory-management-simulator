// PASSPORT
const LocalStrategy = require("passport-local").Strategy;

const initialize = (passport) => {
  console.log("Running Initialize");

  const authenticateUser = async (email, password, done) => {
    const user = await userLoginService.read(email);

    if (user) {
      console.log("authenticateUser Found user:", user);
      console.log("password", password);

      bcrypt.compare(password, user.password, (error, isMatch) => {
        if (error) {
          throw error;
        }

        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect password" });
        }
      });
    } else {
      return done(null, false, { message: "Email not registered" });
    }
  };

  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      authenticateUser
    )
  );

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) => {
    console.log("deserializing User");
    const getUserById = async () => {
      const userFound = await userLoginService.searchById(id);

      if (userFound) {
        console.log("deserialize userFound:", userFound);
        return done(null, userFound);
      }
    };
    getUserById();
  });
};

module.exports = initialize;
