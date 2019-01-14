const passport = require("passport");
const TwitterStrategy = require("passport-twitter").Strategy;

const app = require("../../util/app");

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_TOKEN,
      consumerSecret: process.env.TWITTER_SECRET,
      callbackURL: "https://serverless-express.now.sh/login",
    },
    function(token, tokenSecret, profile, cb) {
      return cb(null, profile);
    },
  ),
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.get("*", passport.authenticate("twitter"), (req, res) => {
  delete req.session.passport; // This adds a lot of bloat to the cookie and causes it to not get persisted.
  const { name, screen_name, profile_image_url_https } = req.user._json;
  req.session["user-from-twitter"] = {
    name,
    screen_name,
    profile_image_url_https,
  };
  res.redirect("/user-zone");
});

module.exports = app;
