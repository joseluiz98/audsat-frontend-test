import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AdministrativeRoutingModule } from './administrative-routing.module';
import { UsersComponent } from './users/users.component';
import { FilterByComponent } from './filter-by/filter-by.component';
import { PhonePipe } from '../shared/phone.pipe';
import { UsersFilterPipe } from '../shared/users-filter.pipe';

@NgModule({
  declarations: [UsersComponent, FilterByComponent, PhonePipe, UsersFilterPipe],
  imports: [
    CommonModule,
    AdministrativeRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class AdministrativeModule {}
