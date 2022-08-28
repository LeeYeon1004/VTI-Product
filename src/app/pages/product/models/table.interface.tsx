import { Product } from './product.interface';

export interface ITables {
  listData: Product[];
  handleRemove: (data: number | undefined) => void;
  getItem: (item: Product) => void;
  handleOpen: () => void;
  checkEdit: () => void;
}
