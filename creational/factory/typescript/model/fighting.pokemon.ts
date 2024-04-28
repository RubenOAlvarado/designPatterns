import { Pokemon } from "../interfaces/pokemon.interface";

export class FightingPokemon implements Pokemon {
    name: string;
    type: string;

    constructor(name: string) {
        this.name = name;
        this.type = 'fighting';
    }

    attack(): void {
        console.log(`${this.name} attacks with punch!`);
    }
}