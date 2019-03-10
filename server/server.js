var express = require("express");
var cors = require("cors");
var Twit = require("twit");
var config = require("./twitter-config");

var app = express();
var T = new Twit(config);
app.use(cors());

app.get("/getUser", function(req, res) {
  T.get(
    "/friends/list",
    { screen_name: "ShubhamGaur93", count: 200 },
    (err, data, apires) => {
      var mainObj = {};
      var random = Math.floor(Math.random() * data.users.length);
      mainObj.user = data.users[random];
      T.get(
        "statuses/user_timeline",
        { user_id: mainObj.user.id, count: 200 },
        (err, tweets, apires) => {
          mainObj.tweets = tweets;
          T.get(
            "followers/list",
            { user_id: mainObj.user.id, count: 200 },
            (err, followers, apires) => {
              mainObj.followers = followers;
              res.send(mainObj);
            }
          );
        }
      );
    }
  );
});

app.listen(4000, () => {
  console.log("server started at 4000");
});
