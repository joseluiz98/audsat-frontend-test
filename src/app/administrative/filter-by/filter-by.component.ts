import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { debounce, debounceTime } from 'rxjs';

import { Log } from '../../shared/classes/log';
import { LogType } from '../../shared/enums/log-type';
import { LoggerService } from '../../shared/services/logger.service';

@Component({
  selector: 'app-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.scss'],
})
export class FilterByComponent implements OnInit {
  constructor(private logger: LoggerService) {}
  @Output() public filterBy = new EventEmitter();

  public filterForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
  });

  public ngOnInit(): void {
    // Performs filtering automatically respecting a delay (debounce time) after each value change
    this.filterForm.valueChanges.pipe(debounceTime(800)).subscribe((value) => {
      this.filter();
    });
  }

  get email() {
    return this.filterForm.get('email');
  }

  public filter(): void {
    let event = new Log(LogType.FILTER, this.filterForm.value);
    this.logger.log(event);
    this.filterBy.emit(this.filterForm.value);
  }
}
