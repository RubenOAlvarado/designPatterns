import { Pokemon } from "../interfaces/pokemon.interface";

export class WaterPokemon implements Pokemon {
    name: string;
    type: string;

    constructor(name: string) {
        this.name = name;
        this.type = 'water';
    }

    attack(): void {
        console.log(`${this.name} attacks with water gun!`);
    }
}