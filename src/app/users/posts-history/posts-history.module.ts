import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { PostsHistoryRoutingModule } from './posts-history-routing.module';
import { PostsHistoryComponent } from './posts-history.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PostComponent } from './post/post.component';
import { UserDataComponent } from './user-data/user-data.component';

@NgModule({
  declarations: [PostsHistoryComponent, PostComponent, UserDataComponent],
  imports: [
    CommonModule,
    PostsHistoryRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
  ],
})
export class PostsHistoryModule {}
