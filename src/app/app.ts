import { Component, computed, signal } from '@angular/core';
import { CardType } from '../types/card.type';
import { PlaceCard } from './components/place-card/place-card';
import { FilterType } from '../types/filter.type';
import { Filters } from './components/filters/filters';
import { filter } from 'rxjs';

@Component({
  imports: [PlaceCard, Filters],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  standalone: true,
})
export class App {
  selectedFilter = signal<string | null>(null);

  filteredCards = computed(() =>
    this.selectedFilter() !== 'Все'
      ? this.cards().filter((card => card.category === this.selectedFilter()))
      : this.cards()
  )
  cards = signal<CardType[]>([
    {
      title: 'Aegean Hideaway',
      place: 'Отель',
      country: 'Имеровигли, Греция',
      euros: '€€€',
      rating: '5.0',
      badges: ['Скала', 'Панорамный вид', 'Тихое место'],
      text: 'Отель, высеченный прямо в скале над морем, где из каждого номера открывается панорамный вид на бескрайний горизонт. Пространство словно становится частью природного ландшафта, а мягкий свет и натуральные материалы ',
      image: 'images/test_product_img.png',
      id: 1,
      isExpanded: false,
      category: 'Отели'
    },
    {
      title: 'Aqua Vista',
      place: 'Ресторан',
      country: 'Мале, Мальдивы',
      euros: '€€',
      rating: '4.9',
      badges: ['Под водой', 'Вид на рыб'],
      text: 'Ресторан на глубине 5 метров под водой с панорамным видом на бескрайний океан и его обитателей. Огромные стеклянные стены создают ощущение полного погружения: вокруг проплывают тропические рыбы, а солнечные лучи ',
      image: 'images/aqua_vista.png',
      id: 2,
      isExpanded: false,
      category: 'Рестораны'
    },
    {
      title: 'Mist Springs',
      place: 'СПА и релакс',
      country: 'Хаконе, Япония',
      euros: '€€',
      rating: '4.7',
      badges: ['Лес', 'Горячие источники', 'Туман', 'Природные бассейны'],
      text: 'Уединённый термальный комплекс среди горного леса, где природные бассейны растворяются в утреннем тумане. Природные горячие источники каскадом спускаются по склону, окружённому густой зеленью и скалами. Здесь можно провести несколько часов в тёплой воде, наслаждаясь тишиной, прохладным горным воздухом и шумом небольших водопадов. ',
      image: 'images/mist_springs.png',
      id: 3,
      isExpanded: false,
      category: 'СПА и релакс'
    },
    {
      title: 'Skyline Cinema',
      place: 'Развлечения',
      country: 'Дубай, ОАЭ',
      euros: '€',
      rating: '4.4',
      badges: ['На крыше', 'Вид на город'],
      text: 'Кинотеатр на крыше небоскрёба, где фильмы смотрят под открытым небом на фоне сияющей панорамы ночного города. ',
      image: 'images/skyline_cinema.png',
      id: 4,
      isExpanded: false,
      category: 'Развлечения'
    },
    {
      title: 'Echoes of Stone',
      place: 'Культура',
      country: 'Матера, Италия',
      euros: '€',
      rating: '4.9',
      badges: ['Пещеры', 'Иммерсивное искусство'],
      text: 'Галерея внутри древних пещер, где произведения искусства оживают с помощью света, звука и проекций прямо на каменных стенах. ',
      image: 'images/echoes_of_stone.png',
      id: 5,
      isExpanded: false,
      category: 'Культура'
    },
    {
      title: 'Aurora Glass Lodge',
      place: 'Отель',
      country: 'Рованиеми, Финляндия',
      euros: '€€',
      rating: '4.8',
      badges: ['Стеклянная крыша', 'Северное сияние'],
      text: 'Стеклянные домики посреди заснеженного леса, где северное сияние можно наблюдать прямо из кровати. Панорамные стены и прозрачная крыша открывают вид на звёздное небо и бескрайние снежные пейзажи, сохраняя внутри тепло и уют. ',
      image: 'images/aurora_glass.png',
      id: 6,
      isExpanded: false,
      category: 'Отели'
    },
  ]);

  filters = signal<FilterType[]>([
    {
      id: 1,
      name: 'Все',
      selected: true,
    },
    {
      id: 2,
      name: 'Отели',
      selected: false,
    },
    {
      id: 3,
      name: 'Рестораны',
      selected: false,
    },
    {
      id: 4,
      name: 'Развлечения',
      selected: false,
    },
    {
      id: 5,
      name: 'Природа',
      selected: false,
    },
    {
      id: 6,
      name: 'Культура',
      selected: false,
    },
    {
      id: 7,
      name: 'Архитектура',
      selected: false,
    },
    {
      id: 8,
      name: 'СПА и релакс',
      selected: false,
    },
  ]);

  toggleCard(card: CardType): void {
    card.isExpanded = !card.isExpanded;
  }

  toggleFilter(filterToToggle: FilterType) {
    if (filterToToggle.selected === true) {
      return;
    }

    this.filters.update((filters) =>
      filters.map((filter) =>
        filter.id === filterToToggle.id
          ? { ...filter, selected: !filter.selected }
          : {
              ...filter,
              selected: false,
            },
      ),
    );

  }

  selectFilter(filterName: string): void {
    this.selectedFilter.set(filterName);
  }
}
