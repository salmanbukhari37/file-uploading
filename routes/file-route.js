var express = require("express");
var router = express.Router();

var multer = require("multer");
var shortid = require("shortid");
var mime = require("mime-types");

var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function(req, file, callback) {
    var ext = mime.extension(file.mimetype);
    var id = shortid.generate();

    callback(null, id + "." + ext);
  }
});

var upload = multer({ storage: storage }).array("userPhotos");

// File Controller
const fileController = require("../controllers/FileController");

router.post("/upload/photo", upload, fileController.UploadFile);

module.exports = {
  router
};
