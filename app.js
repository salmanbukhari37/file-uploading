var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var cors = require("cors");
var path = require("path");
var fileRoute = require("./routes/file-route").router;
var frontAppRoute = require("./routes/front-route").router;
const dbConfig = require("./dbConfig/config");

const PORT = 4000;

var app = express();

app.use(cors());

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serving static content
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use("/", frontAppRoute);
// api routes
app.use("/api", fileRoute);

app.listen(process.env.PORT || PORT, () => {
  console.log(`listening on port ${PORT}`);
});
