import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { PostsHistoryRoutingModule } from './posts-history-routing.module';
import { PostsHistoryComponent } from './posts-history.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PostComponent } from './post/post.component';
import { UserDataComponent } from './user-data/user-data.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    PostsHistoryComponent,
    PostComponent,
    UserDataComponent,
    CommentComponent,
  ],
  imports: [
    CommonModule,
    PostsHistoryRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
})
export class PostsHistoryModule {}
