import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyLevelPipe',
  standalone: true,
})
export class CurrencyLevelPipe implements PipeTransform {
  transform(value: number): string {
    let currencyLevelValue = '€';


    if (value === undefined || value === null || value === 0) {
      return currencyLevelValue;
    }

    currencyLevelValue = '€'.repeat(Math.min(3, Math.max(1, value)))

    return currencyLevelValue;
  }
}
