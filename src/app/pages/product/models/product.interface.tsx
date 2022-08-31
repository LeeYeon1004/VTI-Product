export interface Product {
  id?: number;
  name?: string;
  price?: number;
  mfg?: string;
  brand?: string;
}
export interface Props {
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
  listData: Product[];
  handlePostItem: (data: Product) => void;
  handleRemove: (data: number | undefined) => void;
  getItem: (data: Product) => void;
  sendItem: Product | undefined;
  checkAdd: () => void;
  checkEdit: () => void;
  check: boolean;
  handleEdit: (data: Product) => void;
}
