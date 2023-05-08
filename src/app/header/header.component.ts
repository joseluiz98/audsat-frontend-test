import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { Log } from '../shared/classes/log';
import { LogBody } from '../shared/classes/log-body';
import { LogType } from '../shared/enums/log-type';
import { LoggerService } from '../shared/services/logger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy, OnInit {
  // Subscription
  private subs$: Subscription[] = [];

  constructor(private logger: LoggerService, private router: Router) {}
  public ngOnInit(): void {
    // Managing logs
    let routeEvents$ = this.router.events.subscribe((event) => {
      let targetRoute = '';

      if (event instanceof NavigationEnd) {
        targetRoute = event.url;
        let body = new LogBody();
        body.targetRoute = targetRoute;

        let log = new Log(LogType.NAVIGATION, body);
        this.logger.log(log);
      }
    });
    this.subs$.push(routeEvents$);
  }

  public ngOnDestroy(): void {
    this.subs$.forEach((sub) => sub.unsubscribe());
  }
}
