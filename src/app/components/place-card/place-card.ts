import { Component, input, output } from '@angular/core';
import { Card } from '../../../types/card.type';

@Component({
  imports: [],
  selector: 'app-place-card',
  styleUrl: './place-card.scss',
  templateUrl: './place-card.html',
  standalone: true,
})
export class PlaceCard {
  card = input.required<Card>()
  toggled = output<Card>({alias: 'toggle'})


  toggle() {
    this.toggled.emit(this.card())
  }
}
