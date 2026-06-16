import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {
  transform(value: number | string): string {
    if (!value || isNaN(Number(value))) {
      return '0 хв';
    }

    const totalMinutes = Number(value);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    // Если фильм идет меньше часа 
    if (hours === 0) {
      return `${minutes} хв`;
    }

    // Если минут 0 (ровно 2 часа), выводим только часы
    if (minutes === 0) {
      return `${hours} год`;
    }

    // Стандартный вариант для полнометражек: 2 год 28 хв
    return `${hours} год ${minutes} хв`;
  }
}