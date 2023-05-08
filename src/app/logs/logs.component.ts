import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { LoggerService } from '../shared/services/logger.service';
import { Log } from '../shared/classes/log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
})
export class LogsComponent implements AfterViewInit {
  public displayedColumns: string[] = ['id', 'timestamp', 'type'];
  public dataSource = new MatTableDataSource<Log>([]);

  constructor(
    private logger: LoggerService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  @ViewChild(MatSort) sort: MatSort | null = null;

  public ngAfterViewInit() {
    this.logger.getLogs().subscribe((logs) => {
      this.dataSource.data = logs;
    });

    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: any) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
