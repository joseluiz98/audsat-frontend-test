import { Component, OnDestroy } from '@angular/core';

import { User } from '../../shared/classes/user';
import { IFilter } from '../../shared/classes/filter';
import { JsonplaceholderService } from '../../shared/services/jsonplaceholder.service';
import { Subscription } from 'rxjs';

const FILTER_WITH_PIPE: boolean = false;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnDestroy {
  public users: User[] = [];
  public filter: IFilter | null = null;

  // Subscription
  private subs$: Subscription[] = [];

  constructor(private service: JsonplaceholderService) {}

  public ngOnInit(): void {
    let users$ = this.service
      .getUsers()
      .subscribe((users: User[]) => (this.users = users));
    this.subs$.push(users$);
  }

  public filterChanged(filterValue: IFilter): void {
    this.filter = filterValue;
    if (FILTER_WITH_PIPE === false) {
      let users$ = this.service
        .getUsers(filterValue)
        .subscribe((users) => (this.users = users));
      this.subs$.push(users$);
    }
  }

  public ngOnDestroy(): void {
    this.subs$.forEach((sub) => sub.unsubscribe());
  }
}
