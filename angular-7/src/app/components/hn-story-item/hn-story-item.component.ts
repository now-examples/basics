import {Component, OnInit, Input} from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-hn-story-item",
  templateUrl: "./hn-story-item.component.html",
  styleUrls: ["./hn-story-item.component.scss"]
})
export class HnStoryItemComponent implements OnInit {
  @Input() idx: number;
  @Input() by: string;
  @Input() id: number;
  @Input() score: number;
  @Input() text: string;
  @Input() title: string;
  @Input() time: any;
  @Input() type: string;
  @Input() kids: string[];
  @Input() url: string;
  @Input() feedItemFetched: boolean;
  @Input() commentsCount: number;

  constructor() {}

  getAuthor() {
    let author = "";
    if (this.url !== undefined) {
      let authorSource = new URL(this.url);
      author = authorSource.hostname;
    }
    return author;
  }

  getHours() {
    let hours = moment.unix(+this.time).fromNow();
    return hours;
  }

  ngOnInit() {}
}
