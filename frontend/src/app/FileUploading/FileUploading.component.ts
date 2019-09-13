import {
  FileSelectDirective,
  FileUploader
} from "ng2-file-upload/ng2-file-upload";
import { Component, OnInit } from "@angular/core";

const UploadUrl = "http://localhost:4000/api/upload/photo";

@Component({
  selector: "app-FileUploading",
  templateUrl: "./FileUploading.component.html",
  styleUrls: ["./FileUploading.component.css"]
})
export class FileUploadingComponent implements OnInit {
  title = "Upload a File";

  public uploader: FileUploader = new FileUploader({
    url: UploadUrl,
    itemAlias: "userPhotos"
  });
  constructor() {}

  ngOnInit() {
    this.uploader.onAfterAddingFile = file => {
      file.withCredentials = false;
    };

    this.uploader.onCompleteItem = (
      item: any,
      response: any,
      status: any,
      headers: any
    ) => {
      console.log("File:uploaded", item, status, response);
      alert("File Uploaded successfully");
    };
  }
}
