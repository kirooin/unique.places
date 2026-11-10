import { Component, input, output } from '@angular/core';
import { CardType } from '../../../types/card.type';
import { CurrencyLevelPipe } from '../../shared/pipes/currency-level-pipe';
import { BadgeLabelPipe } from '../../shared/pipes/badge-label-pipe';
import { Tooltip } from '../../shared/ui/tooltip';

@Component({
  selector: 'app-place-card',
  styleUrl: './place-card.scss',
  templateUrl: './place-card.html',
  standalone: true,
  imports: [CurrencyLevelPipe, BadgeLabelPipe, Tooltip],
  host: {
    '(document:keydown.escape)': 'closeModalByEscape()',
  },
})
export class PlaceCard {
  card = input.required<CardType>();
  toggled = output<CardType>({ alias: 'toggle' });
  liked = output<CardType>({ alias: 'like' });
  isModal = input<boolean>(false);

  toggle(): void {
    this.toggled.emit(this.card());
  }

  like(): void {
    this.liked.emit(this.card());
  }

  closeModalByEscape(): void {
    if (this.isModal()) {
      this.toggle();
    }
  }
}
