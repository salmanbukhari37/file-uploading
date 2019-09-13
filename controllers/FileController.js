const FileModel = require("../models/fileModel");
var path = require("path");
var fs = require("fs");

// var response = 0;

// upload file
const UploadFile = (req, res) => {
  if (req.files) {
    for (var i = 0; i < req.files.length; i++) {
      var addFile = new FileModel();

      //   console.log(req.files[i].filename);

      addFile.FileName = req.files[i].filename;
      addFile.FilePath = req.files[i].path;

      addFile.save((err, result) => {
        res.send(result);
      });
    }
  }
};

// function addResponse() {
//   console.log("function");
//   response = response + 1;
// }

// Front App
const GetFile = (req, res) => {
  //   fs.unlink(
  //     path.join(__dirname, "/../uploads/ySPnDwNO4.png"),
  //     (err, result) => {}
  //   );
  //   console.log(__dirname + "/../index.html");
  // res.sendFile(path.join(__dirname, "/../index.html"));

  res.sendFile(path.join(__dirname, "/../index.html"));
};

const ShowFile = (req, res) => {
  FileModel.find((err, result) => {
    res.render("image", {
      data: result
    });
  });
};

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

module.exports = {
  GetFile,
  UploadFile,
  ShowFile
};
