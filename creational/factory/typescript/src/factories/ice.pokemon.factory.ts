import { PokemonFactory } from '../interfaces/pokemon.factory.interface';
import { Pokemon } from '../interfaces/pokemon.interface';
import { IcePokemon } from '../model/ice.pokemon';

export class IcePokemonFactory implements PokemonFactory {
    createPokemon(name: string): Pokemon {
        return new IcePokemon(name);
    }
}