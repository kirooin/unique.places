import { Component, input, output } from '@angular/core';
import { FilterType } from '../../../types/filter.type';
import { NgClass } from '@angular/common';
import { Tooltip } from '../../shared/ui/tooltip';

@Component({
  imports: [NgClass, Tooltip],
  selector: 'app-filters',
  styleUrl: './filters.scss',
  template: `
    <button
      type="button"
      (click)="toggle()"
      [ngClass]="['filters__btn', filter().selected ? 'filters__btn_selected' : '']"
      appTooltip="Выбрать"
    >
      {{ filter().name }}
    </button>
  `,
  standalone: true,
})
export class Filters {
  filter = input.required<FilterType>({ alias: 'filters' });
  toggled = output<FilterType>({ alias: 'toggle' });
  selected = output<string>({ alias: 'select' });

  toggle(): void {
    this.toggled.emit(this.filter());
  }
}
