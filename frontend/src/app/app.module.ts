import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FileUploadingComponent } from "./FileUploading/FileUploading.component";
import { FileSelectDirective } from "ng2-file-upload";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [FileUploadingComponent, FileSelectDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [FileUploadingComponent]
})
export class AppModule {}
