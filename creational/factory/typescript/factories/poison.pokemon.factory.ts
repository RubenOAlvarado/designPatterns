import { PokemonFactory } from '../interfaces/pokemon.factory.interface';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PoisonPokemon } from '../model/poison.pokemon';

export class PoisonPokemonFactory implements PokemonFactory {
    createPokemon(name: string): Pokemon {
        return new PoisonPokemon(name);
    }
}