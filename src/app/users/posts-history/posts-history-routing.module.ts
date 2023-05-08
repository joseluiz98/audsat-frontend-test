import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsHistoryComponent } from './posts-history.component';

const routes: Routes = [{ path: '', component: PostsHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsHistoryRoutingModule {}
