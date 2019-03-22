import { Component, OnInit ,Input,Output} from '@angular/core';
import { HackernewsApiService } from 'src/app/services/hackernews-api.service';

@Component({
  selector: 'app-story-comments',
  templateUrl: './story-comments.component.html',
  styleUrls: ['./story-comments.component.scss']
})
export class StoryCommentsComponent implements OnInit {

  @Input() level: number;
  @Input() id: number;
  public by: string;
  public kids: string[];
  public text: string;
  public time: string;
  public isActivated: boolean;
  public hasCommentTree: boolean;
  public isCommentLoading:boolean;

  constructor(private http:HackernewsApiService) { }

  ngOnInit() {
    this.isCommentLoading = true
    this.http.getComments(this.id).subscribe(
      data => {
        Object.assign(this, data);
        this.isCommentLoading = false
      },
      error => console.log(error)
    );
  }

}
