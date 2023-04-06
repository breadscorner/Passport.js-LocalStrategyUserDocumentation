const passport = require( "passport");
const LocalStrategy = require("passport-local").Strategy;
const {getUserByUsername, getUserByUsernameAndPassword} = require("./fake-db");

const localStrategy = new LocalStrategy(
    (username, password, done) => {
      const user = getUserByUsernameAndPassword(username, password);
      if(user) {
        done(null, user)
      } else {
        done(null, false, {
          message: "Your login details are not valid. Please try again."
        })
      }
    }
  );
  
  passport.serializeUser(function (user, done) {
    done(null, user.username);
  });
  
  passport.deserializeUser(function (username, done) {
    let user = getUserByUsername(username);
    if (user) {
      done(null, user);
    } else {
      done({ message: "User not found" }, null);
    }
  });

module.exports = passport.use(localStrategy);

