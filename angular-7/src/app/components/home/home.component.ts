import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HackernewsApiService } from 'src/app/services/hackernews-api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  public subscription: any;
  public feed: Array<any>;
  public isLoading: boolean;
  constructor(private http: HttpClient, private hackerNewsService: HackernewsApiService) {

  }

  ngOnInit() {
    this.isLoading = true;
    this.feed = [];
    this.subscription =
      this.hackerNewsService.getFeedItemInRange().pipe(
        map(data => data)
      ).subscribe(data => {
        this.feed.push(data)
        this.isLoading = false;
      }, error => console.log(error))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}