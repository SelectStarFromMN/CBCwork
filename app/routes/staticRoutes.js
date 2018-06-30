module.exports = function (app,model) {


    var path = require("path");

    app.get("/", function (req, res) {
        res.render("home");
    });

    app.get("/api", function (req, res) {
        res.render("api");
    });

    
    app.get("/style/style.css", function (req, res) {
        res.render(path.join(__dirname, "../public/style/style.css"));
    });

    app.get("/img/cbclog.png", function (req, res) {
        res.render(path.join(__dirname, "../public/img/cbclog.png"));
    });


}