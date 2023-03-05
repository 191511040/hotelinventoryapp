import { ActivatedRoute } from '@angular/router';
import { CommentsService } from './comments.service';
import { Component, OnInit } from '@angular/core';
import { map, pluck } from 'rxjs';

@Component({
  selector: 'hinv-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent  implements OnInit{


  constructor(private commentservice:CommentsService,private activatedRoute:ActivatedRoute) {

  }
  comments$ = this.commentservice.getcomments();
  comment$=this.activatedRoute.data.pipe(pluck('comments'))
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) =>console.log(data['comments']) );
  }
}
