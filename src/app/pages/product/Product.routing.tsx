import { RouteObject } from 'react-router-dom';
import ProductComponent from './components/product/Product.Component';

export const productRouting: RouteObject[] = [
  {
    path: 'products',
    element: <ProductComponent />,
  },
];
