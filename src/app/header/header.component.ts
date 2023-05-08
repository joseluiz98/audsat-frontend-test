import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

import { Log } from '../shared/classes/log';
import { LogBody } from '../shared/classes/log-body';
import { LogType } from '../shared/enums/log-type';
import { LoggerService } from '../shared/services/logger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private logger: LoggerService, private router: Router) {}
  public ngOnInit(): void {
    // Managing logs
    this.router.events.subscribe((event) => {
      let targetRoute = '';

      if (event instanceof NavigationEnd) {
        targetRoute = event.url;
        let body = new LogBody();
        body.targetRoute = targetRoute;

        let log = new Log(LogType.NAVIGATION, body);
        this.logger.log(log);
      }
    });
  }
}
