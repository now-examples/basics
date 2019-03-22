import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, from} from 'rxjs'
import {map,flatMap,mergeAll, mergeMap} from 'rxjs/operators'
// import { Observable } from 'rxjs/Observable';
// import { map, mergeMap, tap, switchMap, flatMap, filter } from 'rxjs/operators';


@Injectable()
export class HackernewsApiService {

  constructor(private http: HttpClient) {}

  getStories(): Observable<any> {
    return this.http
      .get(`https://hacker-news.firebaseio.com/v0/topstories.json`)
      .pipe(map(data => data))
  }

  getStoryItem(itemId): Observable<any> {
    return this.http
      .get(`https://hacker-news.firebaseio.com/v0/item/${itemId}.json`)
      .pipe(map(data => data));
  }

  getFeedItemInRange(): Observable<any> {
    return this.getStories()
      .pipe(map(data=>data.slice(0,30)))
      .pipe(flatMap(data=>from(data)))
      .pipe(flatMap(data=>this.getStoryItem(data)))
      .pipe(map(result=>result))
  }

  getComments(commentId): Observable<any> {
    return this.http
      .get(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`)
      .pipe(map(data => data));
  }


}
