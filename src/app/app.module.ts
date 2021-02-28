import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MentionModule } from "angular-mentions";

@NgModule({
  imports: [BrowserModule, FormsModule, MentionModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
