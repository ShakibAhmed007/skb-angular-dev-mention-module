import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  mentionConfig = {
    mentions: [
      {
        items: ["Noah", "Liam", "Mason", "Jacob"],
        triggerChar: "@"
      },
      {
        items: ["Red", "Yellow", "Green"],
        triggerChar: "#"
      }
    ]
  };
}
