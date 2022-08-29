import { Product } from './product.interface';

export interface ITables {
  newList: Product[];
  handleRemove: (data: number | undefined) => void;
  getItem: (item: Product) => void;
  handleOpen: () => void;
  checkEdit: () => void;
  getPage: (data: number) => void;
}
