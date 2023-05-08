import { Component } from '@angular/core';

import { User } from '../../shared/classes/user';
import { IFilter } from '../../shared/classes/filter';
import { JsonplaceholderService } from '../../shared/services/jsonplaceholder.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  public users: User[] = [];
  public filter: IFilter | null = null;

  constructor(private service: JsonplaceholderService) {}

  public ngOnInit(): void {
    this.service.getUsers().subscribe((users: User[]) => (this.users = users));
  }

  public filterChanged(filterValue: IFilter): void {
    this.filter = filterValue;
  }
}
