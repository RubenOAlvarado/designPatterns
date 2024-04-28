import { Pokemon } from "../interfaces/pokemon.interface";

export class PsychicPokemon implements Pokemon {
    name: string;
    type: string;

    constructor(name: string) {
        this.name = name;
        this.type = 'psychic';
    }

    attack(): void {
        console.log(`${this.name} attacks with confusion!`);
    }
}