import { PokemonFactory } from '../interfaces/pokemon.factory.interface';
import { Pokemon } from '../interfaces/pokemon.interface';
import { InsectPokemon } from '../model/insect.pokemon';

export class InsectPokemonFactory implements PokemonFactory {
    createPokemon(name: string): Pokemon {
        return new InsectPokemon(name);
    }
}