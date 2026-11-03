import { Component, input, output } from '@angular/core';
import { CardType } from '../../types/card.type';

@Component({
  selector: 'app-place-card-modal',
  styleUrl: './place-card-modal.scss',
  templateUrl: './place-card-modal.html',
  standalone: true
})
export class PlaceCardModal {
  card = input.required<CardType>();
  liked = output<CardType>({alias: 'like'});
  // opened = output<CardType>({alias: 'open'});
  //
  like() {
    this.liked.emit(this.card());
  }
  //
  // open() {
  //   this.opened.emit(this.card())
  // }
}
