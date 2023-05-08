import { Injectable } from '@angular/core';

import { NgxIndexedDBService } from 'ngx-indexed-db';
import { map, Observable } from 'rxjs';

import { Log } from '../classes/log';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor(private dbService: NgxIndexedDBService) {}

  public getLogs(): Observable<Log[]> {
    return this.dbService
      .getAll<Log>('event')
      .pipe(map((value) => value as Log[]));
  }

  public log(event: Log) {
    this.dbService.add('event', event).subscribe();
  }
}
