import { axiosInstance } from "./config"

const getPokemons = (limit = 151) => {
    return axiosInstance.get(`/pokemon?limit=${limit}`)
        .then((response) => {
            const pokemonList = response.data.results;
            return Promise.all(
                pokemonList.map((pokemon) => axiosInstance.get(pokemon.url))
            );
        });
}


export { getPokemons };