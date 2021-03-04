import {Injectable} from "@angular/core";
import {ProductService} from "../services/product.service";
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {GetAllProductsActionSuccess, ProductsActionsTypes} from "./products.actions";
import {map, mergeMap} from "rxjs/operators";

@Injectable()
export  class ProductsEffects {
  constructor( private productService: ProductService, private  effectActions: Actions){}

  getAllProductsEffect: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
      mergeMap(action => this.productService.getProducts()
        .pipe(
          map(products => new GetAllProductsActionSuccess(products))
        )
    )
    ));
}
