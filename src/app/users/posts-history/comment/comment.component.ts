import { Component, Input } from '@angular/core';

import { Comment } from '../../../shared/classes/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  @Input() public comment = new Comment();
}
