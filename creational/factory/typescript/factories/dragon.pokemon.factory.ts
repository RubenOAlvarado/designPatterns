import { PokemonFactory } from "../interfaces/pokemon.factory.interface";
import { Pokemon } from "../interfaces/pokemon.interface";
import { DragonPokemon } from "../model/dragon.pokemon";

export class DragonPokemonFactory implements PokemonFactory {
    createPokemon(name: string): Pokemon {
        return new DragonPokemon(name);
    }
}