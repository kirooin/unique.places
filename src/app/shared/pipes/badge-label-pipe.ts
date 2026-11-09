import { Pipe, PipeTransform } from '@angular/core';
import { BadgeCode } from '../../../types/badges.type';
import { BADGE_LABELS } from '../constants/BADGE_LABELS';

@Pipe({
  name: 'badgeLabel',
  standalone: true,
})
export class BadgeLabelPipe implements PipeTransform {
  transform(value: BadgeCode): string {
    return BADGE_LABELS[value] ?? value;
  }
}
