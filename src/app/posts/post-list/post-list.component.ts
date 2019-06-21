import { Component, Input } from "@angular/core";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent {
  @Input() posts = [];

  // posts = [
  //   { title: "first Post", content: "This is the first post's content" },
  //   { title: "Second Post", content: "This is the Second post's content" },
  //   { title: "third Post", content: "This is the third post's content" },
  //   { title: "fourth Post", content: "This is the fourth post's content" }
  // ];
}
