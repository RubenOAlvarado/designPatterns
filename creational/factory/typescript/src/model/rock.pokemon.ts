import { Pokemon } from "../interfaces/pokemon.interface";

export class RockPokemon implements Pokemon {
    name: string;
    type: string;

    constructor(name: string) {
        this.name = name;
        this.type = 'rock';
    }

    attack(): void {
        console.log(`${this.name} attacks with rock throw!`);
    }
}