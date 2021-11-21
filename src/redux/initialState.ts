import { IProduct } from '../interfaces/Product';

export interface IStore {
  productReducer: {
    products: IProduct[]
  };
};

const store: IStore = {
  productReducer: {
    products: []
  }
};

export default store;