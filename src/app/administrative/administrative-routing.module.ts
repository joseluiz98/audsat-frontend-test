import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  {
    path: ':id/posts',
    loadChildren: () =>
      import('../administrative/posts-history/posts-history.module').then(
        (m) => m.PostsHistoryModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrativeRoutingModule {}
