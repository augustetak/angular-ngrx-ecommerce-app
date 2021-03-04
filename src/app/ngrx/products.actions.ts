import {Action} from "@ngrx/store";
import {Product} from "../model/product.model";

export enum ProductsActionsTypes {
  GET_ALL_PRODUCTS = "[Products] Get All products",
  GET_ALL_PRODUCTS_SUCCESS = "[Products] Get All products Success",
  GET_ALL_PRODUCTS_ERROR = "[Products] Get All products Error",
/* GET SELECTED PRODUCTS */
  GET_SELECTED_PRODUCTS = "[Products] Get SELECTED products",
  GET_SELECTED_PRODUCTS_SUCCESS = "[Products] Get SELECTED products Success",
  GET_SELECTED_PRODUCTS_ERROR = "[Products] Get SELECTED products Error"
}

/* GET ALL PRODUCTS ACTION*/
export  class GetAllProductsAction implements  Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS;

  constructor(public payload: any ){}
}

export  class GetAllProductsActionSuccess implements  Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;

  constructor(public payload: any){}
}

export  class GetAllProductsActionError implements  Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;

  constructor(public payload: string){}
}

/* GET SELECTED PRODUCTS ACTION*/
export  class GetSelectedProductsAction implements  Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS;

  constructor(public payload: any ){}
}

export  class GetSelectedProductsActionSuccess implements  Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;

  constructor(public payload: any){}
}

export  class GetSelectedProductsActionError implements  Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;

  constructor(public payload: string){}
}
export type ProductsActions =
  GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError
  |GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError ;
