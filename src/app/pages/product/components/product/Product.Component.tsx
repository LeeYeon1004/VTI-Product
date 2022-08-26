import ProductTemplate from './Product.Template';
import { createContext, useState } from 'react';
import { Product } from '../../models/product.interface';

export const AddContext = createContext<Product[]>([]);
function ProductComponent() {
  const [open, setOpen] = useState<boolean>(false);
  const [item, setItem] = useState<any>([]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const callItem = (item: any) => {
    setItem(item);
  };

  return (
    <div>
      <ProductTemplate
        handleOpen={handleOpen}
        handleClose={handleClose}
        callItem={callItem}
        item={item}
        open={open}
      />
    </div>
  );
}
export default ProductComponent;
