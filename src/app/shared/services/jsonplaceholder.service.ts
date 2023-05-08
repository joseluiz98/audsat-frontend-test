import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';
import { Post } from '../classes/post';
import { User } from '../classes/user';
import { Comment } from '../classes/comment';

const API = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root',
})
export class JsonplaceholderService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get(`${API}/users`).pipe(map((value) => value as User[]));
  }

  public getUserById(id: string | null): Observable<User> {
    return this.http
      .get(`${API}/users/${id}`)
      .pipe(map((value) => value as User));
  }

  public getPostsByUser(userId: string | null): Observable<Post[]> {
    return this.http
      .get(`${API}/users/${userId}/posts`)
      .pipe(map((value) => value as Post[]));
  }

  public getCommentsByPostId(postId: string | null): Observable<Comment[]> {
    return this.http
      .get(`${API}/posts/${postId}/comments`)
      .pipe(map((value) => value as Comment[]));
  }

  public deletePost(id: string) {
    return this.http.delete(`${API}/posts/${id}`);
  }
}
