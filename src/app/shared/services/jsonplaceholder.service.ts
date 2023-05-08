import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map, Observable, tap } from 'rxjs';
import { Post } from '../classes/post';
import { User } from '../classes/user';
import { Comment } from '../classes/comment';
import { LoggerService } from './logger.service';
import { Log } from '../classes/log';
import { LogBody } from '../classes/log-body';
import { LogType } from '../enums/log-type';
import { IFilter } from '../classes/filter';

const API = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root',
})
export class JsonplaceholderService {
  constructor(private http: HttpClient, private logger: LoggerService) {}

  public getUsers(optionalFilter?: IFilter | null): Observable<User[]> {
    let params = new HttpParams();

    if (optionalFilter?.name) {
      params = params.set('name', optionalFilter.name);
    }
    if (optionalFilter?.username) {
      params = params.set('username', optionalFilter.username);
    }
    if (optionalFilter?.email) {
      params = params.set('email', optionalFilter.email);
    }

    return this.http.get(`${API}/users`, { params }).pipe(
      tap(() => {
        if (!optionalFilter) {
          this.logger.log(
            new Log(LogType.HTTP_REQUEST, new LogBody('Get All Users'))
          );
        } else {
          this.logger.log(
            new Log(
              LogType.HTTP_REQUEST,
              new LogBody('Get filtered users list')
            )
          );
        }
      }),
      map((value) => value as User[])
    );
  }

  public getUserById(id: string | null): Observable<User> {
    return this.http.get(`${API}/users/${id}`).pipe(
      tap(() =>
        this.logger.log(
          new Log(LogType.HTTP_REQUEST, new LogBody(`Get User with id ${id} `))
        )
      ),
      map((value) => value as User)
    );
  }

  public getPostsByUser(userId: string | null): Observable<Post[]> {
    return this.http.get(`${API}/users/${userId}/posts`).pipe(
      tap(() =>
        this.logger.log(
          new Log(
            LogType.HTTP_REQUEST,
            new LogBody(`Get Posts of User with id ${userId} `)
          )
        )
      ),
      map((value) => value as Post[])
    );
  }

  public getCommentsByPostId(postId: string | null): Observable<Comment[]> {
    return this.http.get(`${API}/posts/${postId}/comments`).pipe(
      tap(() =>
        this.logger.log(
          new Log(
            LogType.HTTP_REQUEST,
            new LogBody(`Get Comments of Post with id ${postId} `)
          )
        )
      ),
      map((value) => value as Comment[])
    );
  }

  public deletePost(postId: string) {
    return this.http
      .delete(`${API}/posts/${postId}`)
      .pipe(
        tap(() =>
          this.logger.log(
            new Log(
              LogType.HTTP_REQUEST,
              new LogBody(`Delete Post with id ${postId} `)
            )
          )
        )
      );
  }
}
