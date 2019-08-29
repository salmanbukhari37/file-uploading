const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const fileUploadSchema = new Schema(
  {
    FileName: {
      type: String,
      require: true
    },
    FilePath: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("FileUploadSchema", fileUploadSchema);
