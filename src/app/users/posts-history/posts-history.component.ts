import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatAccordion } from '@angular/material/expansion';

import { Post } from '../../shared/classes/post';
import { User } from '../../shared/classes/user';

import { JsonplaceholderService } from '../../shared/jsonplaceholder.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-posts-history',
  templateUrl: './posts-history.component.html',
  styleUrls: ['./posts-history.component.scss'],
})
export class PostsHistoryComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion | null = null;

  private userId: string | null = this.route.snapshot.paramMap.get('id');
  public posts: Post[] = [];
  public user: User = new User();

  constructor(
    private route: ActivatedRoute,
    private service: JsonplaceholderService
  ) {}

  public ngOnInit(): void {
    this.service.getUserById(this.userId).subscribe((user) => {
      this.user = user;
    });

    this.service.getPostsByUser(this.userId).subscribe((posts) => {
      this.posts = posts;
    });
  }
}
