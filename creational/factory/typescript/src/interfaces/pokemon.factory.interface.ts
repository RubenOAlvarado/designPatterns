import { Pokemon } from "./pokemon.interface";

export interface PokemonFactory {
    createPokemon(name: string): Pokemon;
}