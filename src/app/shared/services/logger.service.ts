import { Injectable } from '@angular/core';

import { NgxIndexedDBService } from 'ngx-indexed-db';

import { Log } from '../classes/log';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor(private dbService: NgxIndexedDBService) {}

  public log(event: Log) {
    this.dbService.add('event', event).subscribe();
  }
}
