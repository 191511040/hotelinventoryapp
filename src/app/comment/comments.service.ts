import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { comments } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getcomments() {
  return this.http.get<comments[]>('https://jsonplaceholder.typicode.com/comments')
  }
}
