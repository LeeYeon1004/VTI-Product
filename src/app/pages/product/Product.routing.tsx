import { RouteObject } from 'react-router-dom';
import ProductComponent from './components/product/product.component';

export const productRouting: RouteObject[] = [
  {
    path: 'products',
    element: <ProductComponent />,
  },
];
