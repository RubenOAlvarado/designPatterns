import { PokemonFactory } from '../interfaces/pokemon.factory.interface';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PsychicPokemon } from '../model/psychic.pokemon';

export class PsychicPokemonFactory implements PokemonFactory {
    createPokemon(name: string): Pokemon {
        return new PsychicPokemon(name);
    }
}