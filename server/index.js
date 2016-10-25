import envloader from "envloader";
import expressCookieParser from "cookie-parser";
import expressBodyParser from "body-parser";
import API from "./api";

envloader.load("../..");

var port = process.env.PORT || 5020;

var express = require("express");
var app = express();

app.use(require('express-ejs-layouts'));

app.use(expressCookieParser());
app.use(expressBodyParser.json());

//   var api = require("./api");
//   api(app, db, auth);

app.get("/api/featured", function(req, res) {
    API.getFeaturedCar(function(err, car) {
        res.send(car);
    });
});

app.get("/api/makes", function(req, res) {
    API.getMakes(function(err, makes) {
        res.send(makes);
    });
});

app.get("/api/make/:id/models", function(req, res) {
    API.getModels(parseInt(req.params.id), function(err, models) {
        res.send(models);
    });
});

app.get("/api/model/:id", function(req, res) {
    API.getModel(parseInt(req.params.id), function(err, model) {
        res.send(model);
    });
});



app.use("/", express.static("build/static"));
//    app.use("/", express.static("build/dev/web"));

app.use("/index.css", express.static("build/static/index.css"));

app.get('/ping', function(req, res) {
    res.send("pong");
});

app.get('/env', function(req, res) {
    res.send("env: " + process.env.TEST_VAR);
});

app.listen(port, function() {
    console.log("http server listening on " + port);
});
