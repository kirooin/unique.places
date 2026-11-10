import { CategoryType } from './category.type';
import { BadgeCode } from './badges.type';

export type CardType = {
  title: string,
  place: string,
  country: string,
  rating: string,
  euros: number,
  badges: BadgeCode[],
  badge?: string,
  text: string,
  image: string,
  id: number,
  isOpen: boolean,
  category: CategoryType,
  liked: boolean,

}
