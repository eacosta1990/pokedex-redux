import { call, put, takeEvery } from 'redux-saga/effects';
import {  setPokemon } from '../actions';
import { FETCH_POKEMON } from '../actions/type';
import { getPokemonWithDetails } from '../pokeapi/getPokemons';

function* fetchPokemonWithDetails(actions) {
    try {
        const pokemonWithDetails = yield call(getPokemonWithDetails);
        yield put(setPokemon(pokemonWithDetails));

    } catch (e) {
        console.log(e);
    }
}

function* pokemonSaga() {
    yield takeEvery(FETCH_POKEMON, fetchPokemonWithDetails);
}
export { pokemonSaga };