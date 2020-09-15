module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile("index.html")
    });

    app.get("/exercise", function (req, res) {
        res.sendFile("exercise.html", {root: "./public"});
    });

    app.get("/stats", function (req, res) {
        res.sendFile("stats.html", {root: "./public"});
    });
};