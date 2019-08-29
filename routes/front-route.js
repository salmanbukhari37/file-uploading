var express = require("express");
var router = express.Router();

// Front File Controller
const fileController = require("../controllers/FileController");

// File uploading view
router.get("/", fileController.GetFile);

module.exports = {
  router
};
