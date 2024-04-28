import { PokemonFactory } from "../interfaces/pokemon.factory.interface";
import { Pokemon } from "../interfaces/pokemon.interface";
import { GhostPokemon } from "../model/ghost.pokemon";

export class GhostPokemonFactory implements PokemonFactory {
    createPokemon(name: string): Pokemon {
        return new GhostPokemon(name);
    }
}