import { Component, input, output } from '@angular/core';
import { CardType } from '../../../types/card.type';

@Component({
  selector: 'app-place-card',
  styleUrl: './place-card.scss',
  templateUrl: './place-card.html',
  standalone: true,
})
export class PlaceCard {
  card = input.required<CardType>();
  opened = output<CardType>({alias: 'open'})
  liked = output<CardType>({ alias: 'like' });
  isModal = input<boolean>(false)

  open() {
    this.opened.emit(this.card())
  }

  like() {
    this.liked.emit(this.card());
  }
}
