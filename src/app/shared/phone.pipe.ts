import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(tel: string | number): unknown {
    let value = tel.toString().trim().replaceAll('-', '').substring(0, 11);

    let digit, city, number;
    city = value.slice(0, 2);
    digit = value.slice(2, 3);
    number = value.slice(3);

    number = number.slice(0, 4) + '-' + number.slice(4);

    return `(${city}) ${digit} ${number}`;
  }
}
