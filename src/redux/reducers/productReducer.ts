import initialState from '../initialState';
import { IUpdateProductsAction } from '../actions/productActions';

export default function productReducer(state = initialState.productReducer, action: IUpdateProductsAction) {
  switch (action.type) {
    case 'UPDATE_PRODUCTS':
      return {
        ...state,
        products: action.products
      };
    default:
      return state;
  }
};
