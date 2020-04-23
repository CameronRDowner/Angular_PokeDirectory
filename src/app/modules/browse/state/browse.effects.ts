import { Injectable } from '@angular/core';
import { PokemonService } from '../../pokemon/pokemon.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import * as browseActions from './browse.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';

@Injectable()
export class BrowseEffects {

  constructor(private pokemonService: PokemonService, private actions$: Actions) { }

  @Effect()
  loadAllPokemon$: Observable<Action> = this.actions$.pipe(
    ofType(browseActions.BrowseActionTypes.LoadAllPokemon),
    switchMap(action =>
      this.pokemonService.getAllPokemon().pipe(
        map(result => (new browseActions.LoadAllPokemonSuccess(result.results))),
        catchError(error=> of(new browseActions.LoadAllPokemonFailure(error)))
        )
  )
  );
  // @Effect()
  // loadProducts$: Observable<Action> = this.actions$.pipe(
  //   ofType(productActions.ProductActionTypes.Load),
  //   mergeMap(action =>
  //     this.productService.getProducts().pipe(
  //       map(products => (new productActions.LoadSuccess(products))),
  //       catchError(err => of(new productActions.LoadFail(err)))
  //     )
  //   )
  // );

  // @Effect()
  // updateProduct$: Observable<Action> = this.actions$.pipe(
  //   ofType(productActions.ProductActionTypes.UpdateProduct),
  //   map((action: productActions.UpdateProduct) => action.payload),
  //   mergeMap((product: Product) =>
  //     this.productService.updateProduct(product).pipe(
  //       map(updatedProduct => (new productActions.UpdateProductSuccess(updatedProduct))),
  //       catchError(err => of(new productActions.UpdateProductFail(err)))
  //     )
  //   )
  // );

  // @Effect()
  // createProduct$: Observable<Action> = this.actions$.pipe(
  //   ofType(productActions.ProductActionTypes.CreateProduct),
  //   map((action: productActions.CreateProduct) => action.payload),
  //   mergeMap((product: Product) =>
  //     this.productService.createProduct(product).pipe(
  //       map(newProduct => (new productActions.CreateProductSuccess(newProduct))),
  //       catchError(err => of(new productActions.CreateProductFail(err)))
  //     )
  //   )
  // );

  // @Effect()
  // deleteProduct$: Observable<Action> = this.actions$.pipe(
  //   ofType(productActions.ProductActionTypes.DeleteProduct),
  //   map((action: productActions.DeleteProduct) => action.payload),
  //   mergeMap((productId: number) =>
  //     this.productService.deleteProduct(productId).pipe(
  //       map(() => (new productActions.DeleteProductSuccess(productId))),
  //       catchError(err => of(new productActions.DeleteProductFail(err)))
  //     )
  //   )
  // );
}