import { PokemonFactory } from '../interfaces/pokemon.factory.interface';
import { Pokemon } from '../interfaces/pokemon.interface';
import { DarkPokemon } from '../model/dark.pokemon';

export class DarkPokemonFactory implements PokemonFactory {
    createPokemon(name: string): Pokemon {
        return new DarkPokemon(name);
    }
}