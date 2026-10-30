import { Component, input, output } from '@angular/core';
import { CardType } from '../../../types/card.type';

@Component({
  imports: [],
  selector: 'app-place-card',
  styleUrl: './place-card.scss',
  templateUrl: './place-card.html',
  standalone: true,
})
export class PlaceCard {
  card = input.required<CardType>()
  toggled = output<CardType>({alias: 'toggle'})


  toggle() {
    this.toggled.emit(this.card())
  }
}
