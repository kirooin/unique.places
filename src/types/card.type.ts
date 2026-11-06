import { CategoryType } from './category.type';

export type CardType = {
  title: string,
  place: string,
  country: string,
  rating: string,
  euros: number,
  badges: string[],
  text: string,
  image: string,
  id: number,
  isOpen: boolean,
  category: CategoryType,
  liked: boolean,
}
