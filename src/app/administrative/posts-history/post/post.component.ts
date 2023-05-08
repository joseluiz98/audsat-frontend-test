import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';

import { delay, Subscription } from 'rxjs';

import { Post } from '../../../shared/classes/post';
import { JsonplaceholderService } from '../../../shared/services/jsonplaceholder.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnDestroy {
  @Input() post: Post = new Post();
  @Output() public removePost = new EventEmitter<number>();

  // Subscription
  private subs$: Subscription[] = [];

  constructor(private service: JsonplaceholderService) {}

  public loadComments(post: Post): void {
    if (!post.comments) {
      let getComments$ = this.service
        .getCommentsByPostId(post.id.toString())
        // Delay just for showing loader for sometime
        .pipe(delay(200 + Math.random() * 1000))
        .subscribe((comments) => {
          post.comments = comments;
        });
      this.subs$.push(getComments$);
    }
  }

  public deletePost(event: Event): void {
    event?.stopPropagation();
    this.removePost.emit(this.post.id);
  }

  public ngOnDestroy(): void {
    this.subs$.forEach((sub) => sub.unsubscribe());
  }
}
