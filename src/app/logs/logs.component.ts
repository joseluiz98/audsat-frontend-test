import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { LoggerService } from '../shared/services/logger.service';
import { Log } from '../shared/classes/log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
})
export class LogsComponent implements AfterViewInit {
  public displayedColumns: string[] = ['id', 'timestamp', 'type', 'body'];
  public dataSource = new MatTableDataSource<Log>([]);

  constructor(private logger: LoggerService) {}

  @ViewChild(MatSort) sort: MatSort | null = null;

  public ngAfterViewInit() {
    this.fillLogs();
    this.dataSource.sort = this.sort;
  }

  private fillLogs(): void {
    this.logger.getLogs().subscribe((logs) => {
      this.dataSource.data = logs;
    });
  }

  public refreshLogs(): void {
    this.fillLogs();
  }
}
