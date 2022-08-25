export interface Product {
  id: number;
  name: string;
  price: number;
  mfg: string;
  brand: string;
}
export interface Props {
  handleOpen: () => void;
  handleClose: () => void;
  callItem: (data: any) => void;
  open: boolean;
  item: any;
}
