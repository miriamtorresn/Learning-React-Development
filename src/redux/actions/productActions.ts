import { IProduct } from '../../interfaces/Product';

export interface IUpdateProductsAction {
  type: string,
  products: IProduct[]
};

export function updateProducts(products: IProduct[]): IUpdateProductsAction {
  return { type: 'UPDATE_PRODUCTS', products };
}
