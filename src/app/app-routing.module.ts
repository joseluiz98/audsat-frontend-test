import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogsComponent } from './logs/logs.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./administrative/administrative.module').then(
        (m) => m.AdministrativeModule
      ),
  },
  {
    path: 'logs',
    component: LogsComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
