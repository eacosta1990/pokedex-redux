import React, { useEffect } from "react";
import { fetchPokemon } from "../actions";
import { PokemonCard } from "./PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import "../styles/pokemon.css";

const PokemonList = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.list);

    useEffect(() => {
        dispatch(fetchPokemon());
    }, []);

    return (
        <div className="Pokemon-items" >
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
}

PokemonList.defaultProps = {
    pokemons: []
}

export { PokemonList };