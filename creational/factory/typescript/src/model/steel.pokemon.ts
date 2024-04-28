import { Pokemon } from "../interfaces/pokemon.interface";

export class SteelPokemon implements Pokemon {
    name: string;
    type: string;

    constructor(name: string) {
        this.name = name;
        this.type = 'steel';
    }

    attack(): void {
        console.log(`${this.name} attacks with iron tail!`);
    }
}