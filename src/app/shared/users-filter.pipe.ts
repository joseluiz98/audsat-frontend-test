import { Pipe, PipeTransform } from '@angular/core';

import { IFilter } from './filter';

@Pipe({
  name: 'usersFilter',
})
export class UsersFilterPipe implements PipeTransform {
  transform(items: any[], filter: IFilter | null): any[] {
    if (!items || items.length === 0) {
      return items;
    }

    if (!!filter?.name) {
      items = items.filter((x) =>
        x.name.toLowerCase().includes(filter.name.toLowerCase())
      );
    }

    if (!!filter?.username) {
      items = items.filter((x) =>
        x.username.toLowerCase().includes(filter.username.toLowerCase())
      );
    }

    if (!!filter?.email) {
      items = items.filter((x) =>
        x.email.toLowerCase().includes(filter.email.toLowerCase())
      );
    }

    return items;
  }
}
