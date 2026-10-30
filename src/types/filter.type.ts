import { CategoryType } from './category.type';

export type FilterType = {
  id: number,
  name: string,
  selected: boolean,
  value: CategoryType | 'all';
}
