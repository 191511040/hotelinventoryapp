import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { comments } from '../comment';
import { CommentsService } from '../comments.service';

@Injectable({
  providedIn: 'root'
})
export class CommentGuard implements Resolve<comments[]> {

  constructor(private commentsservice:CommentsService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): comments[] | Observable<comments[]> | Promise<comments[]> {
    return this.commentsservice.getcomments()
  }


}
