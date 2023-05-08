import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FilterByComponent } from './filter-by/filter-by.component';
import { PhonePipe } from '../shared/phone.pipe';
import { UsersFilterPipe } from '../shared/users-filter.pipe';

@NgModule({
  declarations: [UsersComponent, FilterByComponent, PhonePipe, UsersFilterPipe],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class UsersModule {}
