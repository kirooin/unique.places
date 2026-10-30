import { CategoryType } from './category.type';

export type FilterType = {
  id: number,
  name: CategoryType | 'Все',
  selected: boolean,
}
