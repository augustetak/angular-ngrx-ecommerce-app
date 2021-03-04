import {Injectable} from "@angular/core";
import {ProductService} from "../services/product.service";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  GetAllProductsActionError,
  GetAllProductsActionSuccess, GetSelectedProductsActionError,
  GetSelectedProductsActionSuccess,
  ProductsActionsTypes
} from "./products.actions";
import {catchError, map, mergeMap} from "rxjs/operators";

@Injectable()
export  class ProductsEffects {
  constructor( private productService: ProductService, private  effectActions: Actions){}

  /* Get all Products */
  getAllProductsEffect: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
      mergeMap(() => {
        return this.productService.getProducts()
          .pipe(
            map(products => new GetAllProductsActionSuccess(products)),
            catchError(err => of(new GetAllProductsActionError(err)))
          )
      })
    ));

  /* Get Selected Products */
  getSelectedProductsEffect: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
      mergeMap(() => {
        return this.productService.getSelectedProducts()
          .pipe(
            map(products => new GetSelectedProductsActionSuccess(products)),
            catchError(err => of(new GetSelectedProductsActionError(err)))
          )
      })
    ));
}
