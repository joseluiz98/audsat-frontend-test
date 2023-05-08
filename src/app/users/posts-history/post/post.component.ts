import { Component, Input } from '@angular/core';

import { delay } from 'rxjs';

import { Post } from '../../../shared/classes/post';
import { JsonplaceholderService } from '../../../shared/jsonplaceholder.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() post: Post = new Post();

  constructor(private service: JsonplaceholderService) {}

  public loadComments(post: Post): void {
    if (!post.comments) {
      this.service
        .getCommentsByPostId(post.id.toString())
        // Delay just for showing loader for sometime
        .pipe(delay(200 + Math.random() * 1000))
        .subscribe((comments) => {
          post.comments = comments;
        });
    }
  }
}
