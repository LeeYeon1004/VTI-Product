import { Product } from './product.interface';

export interface IModal {
  open: boolean;
  handleClose: () => void;
  handlePostItem: (data: Product) => void;
  sendItem: Product | undefined;
  check: boolean;
  handleEdit: (data: Product) => void;
}
