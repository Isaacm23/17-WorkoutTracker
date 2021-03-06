const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", { useNewUrlParser: true });

require("./routes/html.js")(app);
require("./routes/api.js")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });