import { Pokemon } from "../interfaces/pokemon.interface";

export class FairyPokemon implements Pokemon {
    name: string;
    type: string;

    constructor(name: string) {
        this.name = name;
        this.type = 'fairy';
    }

    attack(): void {
        console.log(`${this.name} attacks with fairy wind!`);
    }
}