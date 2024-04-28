import { Pokemon } from "../interfaces/pokemon.interface";

export class GrassPokemon implements Pokemon {
    name: string;
    type: string;

    constructor(name: string) {
        this.name = name;
        this.type = 'grass';
    }

    attack(): void {
        console.log(`${this.name} attacks with vine whip!`);
    }
}