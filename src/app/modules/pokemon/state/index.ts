import * as root from '../../../app.state';
import * as pokemon from './pokemon.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends root.State {
    pokemon: pokemon.PokemonState;
}

const getPokemonFeatureState = createFeatureSelector<pokemon.PokemonState>('pokemon');

export const getSelectedGame = createSelector(
    getPokemonFeatureState,
    state => state.selectedGame
);