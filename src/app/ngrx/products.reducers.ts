import {Product} from "../model/product.model";
import {ProductsActions, ProductsActionsTypes} from "./products.actions";
import {Action} from "@ngrx/store";

export enum  ProductsStateEnum {
  LOADING ='Loading',
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
export function  productsReducer( state: ProductsState = initState, action: Action ): ProductsState {
  
  switch (action.type) {
    /* GET ALL PRODUCTS */
    case ProductsActionsTypes.GET_ALL_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload};
    case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessages: (<ProductsActions>action).payload};

      /* GET SELECTED */
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload};
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessages: (<ProductsActions>action).payload};
    default : return  {...state};
  }
}
