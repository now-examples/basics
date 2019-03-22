import { Component, OnInit } from '@angular/core';
import { HackernewsApiService } from '../../services/hackernews-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
@Component({
  selector: 'app-hn-story-detailed',
  templateUrl: './hn-story-detailed.component.html',
  styleUrls: ['./hn-story-detailed.component.scss']
})
export class HnStoryDetailedComponent implements OnInit {

  public by: string;
  public id: number;
  public score: number;
  public text: string;
  public title: string;
  public time: string;
  public type: string;
  public kids: string[];
  public url: string;
  public feedItemFetched: boolean;

  constructor(private http: HttpClient,
    private hackerNewsService: HackernewsApiService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.feedItemFetched = false;
      this.hackerNewsService.getStoryItem(params.itemId).subscribe(
        data => {
          Object.assign(this, data)
          this.time = moment.unix(+this.time).fromNow();
          this.feedItemFetched = true;
        },
        error => console.log(error)
      );
    });
  }

}
