import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.scss'],
})
export class FilterByComponent {
  @Output() public filterBy = new EventEmitter();

  public filterForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
  });

  get email() {
    return this.filterForm.get('email');
  }

  public filter(): void {
    this.filterBy.emit(this.filterForm.value);
  }
}
