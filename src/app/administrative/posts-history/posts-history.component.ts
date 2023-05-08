import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatAccordion } from '@angular/material/expansion';
import { Subscription } from 'rxjs';

import { Post } from '../../shared/classes/post';
import { User } from '../../shared/classes/user';
import { JsonplaceholderService } from '../../shared/services/jsonplaceholder.service';

@Component({
  selector: 'app-posts-history',
  templateUrl: './posts-history.component.html',
  styleUrls: ['./posts-history.component.scss'],
})
export class PostsHistoryComponent implements OnDestroy, OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion | null = null;

  private userId: string | null = this.route.snapshot.paramMap.get('id');
  public posts: Post[] = [];
  public user: User = new User();

  // Subscription
  private subs$: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: JsonplaceholderService
  ) {}

  public ngOnInit(): void {
    let getUsers$ = this.service.getUserById(this.userId).subscribe((user) => {
      this.user = user;
    });

    let getPosts$ = this.service
      .getPostsByUser(this.userId)
      .subscribe((posts) => {
        this.posts = posts;
      });

    this.subs$.push(getUsers$);
    this.subs$.push(getPosts$);
  }

  public deletePost(postId: number): void {
    event?.stopPropagation();
    let postIdx = this.posts.findIndex((x) => x.id === postId);
    let post = this.posts.find((x) => x.id === postId);

    if (!!post) post.loading = true;

    this.service.deletePost(postId.toString()).subscribe(() => {
      this.posts.splice(postIdx, 1);
      if (!!post) post.loading = false;
    });
  }

  public ngOnDestroy(): void {
    this.subs$.forEach((sub) => sub.unsubscribe());
  }
}
