import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { LoggerService } from '../shared/services/logger.service';
import { Log } from '../shared/classes/log';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
})
export class LogsComponent implements AfterViewInit, OnDestroy {
  public displayedColumns: string[] = ['id', 'timestamp', 'type', 'body'];
  public dataSource = new MatTableDataSource<Log>([]);

  // Subscription
  private subs$: Subscription[] = [];

  constructor(private logger: LoggerService) {}

  @ViewChild(MatSort) sort: MatSort | null = null;

  public ngAfterViewInit() {
    this.fillLogs();
    this.dataSource.sort = this.sort;
  }

  private fillLogs(): void {
    let logs$ = this.logger.getLogs().subscribe((logs) => {
      this.dataSource.data = logs;
    });
    this.subs$.push(logs$);
  }

  public refreshLogs(): void {
    this.fillLogs();
  }

  public ngOnDestroy(): void {
    this.subs$.forEach((sub) => sub.unsubscribe());
  }
}
