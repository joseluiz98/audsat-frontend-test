import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatLog',
})
export class FormatLogPipe implements PipeTransform {
  transform(value: string): string {
    if (!value || value === '') return value;

    value = value.trim().replaceAll('_', ' ');

    return value;
  }
}
