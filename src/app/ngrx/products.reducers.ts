import {Product} from "../model/product.model";
import {ProductsActions, ProductsActionsTypes} from "./products.actions";

export enum  ProductsStateEnum {
  LODAING ='Loading',
  LOADED ='Success',
  ERROR = 'Error',
  INITIAL = 'Initial'

}
export  interface  ProductsState {
  products : Product[],
  errorMessages: string,
  dataState : ProductsStateEnum
}

const  initState : ProductsState = {
  products: [],
  errorMessages: '',
  dataState : ProductsStateEnum.INITIAL
}
export function  productReducer( state: ProductsState = initState, action: ProductsActions ): ProductsState {
  
  switch (action.type) {
    case ProductsActionsTypes.GET_ALL_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LODAING};
    case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: action.payload};
    case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessages: action.payload};
    default : return  {...state};
  }
}
