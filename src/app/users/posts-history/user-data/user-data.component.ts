import { Component, Input } from '@angular/core';

import { User } from '../../../shared/classes/user';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
})
export class UserDataComponent {
  @Input() user = new User();
}
