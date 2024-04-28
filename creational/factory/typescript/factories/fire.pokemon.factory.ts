import { PokemonFactory } from "../interfaces/pokemon.factory.interface";
import { Pokemon } from "../interfaces/pokemon.interface";
import { FirePokemon } from "../model/fire.pokemon";

export class FirePokemonFactory implements PokemonFactory {
    createPokemon(name: string): Pokemon {
        return new FirePokemon(name);
    }
}