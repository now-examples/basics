const acronym = require("acronym");
const { join } = require("path");
const fetch = require("node-fetch");

const app = require("../../util/app");

const getDefinition = async word => {
  try {
    const response = await fetch(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.DICTIONARY_API_KEY}`,
    );

    const result = await response.json();
    return result[0].shortdef[0];
  } catch (e) {
    return "Can't find definition. 😔";
  }
};

app.set("view engine", "ejs");
app.set("views", join(__dirname, "../../views"));
app.engine(".ejs", require("ejs").__express);

app.get("*", (req, res) => {
  if (!req.session["user-from-twitter"]) {
    res.redirect("/");
  }

  res.append("content-type", "text/html");
  const { screen_name, profile_image_url_https } = req.session["user-from-twitter"];

  const meaning = acronym(screen_name);
  const meaningArr = meaning.split(" ");
  const definitions = meaningArr.map(word => getDefinition(word));

  Promise.all(definitions).then(words => {
    const results = meaningArr.map((word, index) => ({ definition: words[index], word }));
    res.render("userZone", {
      screen_name,
      results,
      tweet: meaningArr.map(word => `${word.slice(0, 1)} ${word.slice(1)}`).join("%0A"),
      avatar: profile_image_url_https,
    });
  });
});

module.exports = app;

