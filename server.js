var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var axios = require("axios");
var cheerio = require("cheerio");

var db = require("./models");

var PORT = process.env.PORT||3000;
var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Connect to the Mongo DB
// mongoose.connect("mongodb://localhost/mongoscraperdb");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoscraperdb";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

//render the page with articles
app.get("/", function(req, res) {
  db.Article.find({}).then(function(dbArticle) {
   
    res.render("index", dbArticle);
  });
});

//scrape nytimes website for articles to site
app.get("/scrape", function(req, res) {
  axios.get("https://www.nytimes.com/").then(function(response) {
    var $ = cheerio.load(response.data);
    
    $("article h2").each(function(i, element) {
      // var result = {};
      var result = {};
     

      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this)
        .children("a")
        .text();
      console.log(result.title);
      result.link = $(this)
        .children("a")
        .attr("href");

      db.Article.create(result)
        .then(function(dbArticle) {
          console.log(dbArticle);
        })
        .catch(function(err) {
          return res.json(err);
        });
    });

    res.send("Scrape Complete");
  });
});



app.get("/articles", function(req, res) {
  db.Article.find({})
    .then(function(dbArticle) {
      res.json(dbArticle);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.get("/articles/:id", function(req, res) {
  db.Article.findOne({ _id: req.params.id })

    .populate("Note")
    .then(function(dbArticle) {})
    .catch(function(err) {
      res.json(err);
    });
});

app.post("/articles/:id", function(req, res) {
  db.Note.create(req.body)
    .then(function(dbNote) {
      return db.Article.findOneAndUpdate(
        { _id: req.params.id },
        { note: dbNote._id },
        { new: true }
      );
    })
    .then(function(dbArticle) {
      res.json(dbArticle);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
