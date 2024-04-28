import { Pokemon } from "../interfaces/pokemon.interface";

export class DragonPokemon implements Pokemon {
    name: string;
    type: string;

    constructor(name: string) {
        this.name = name;
        this.type = 'dragon';
    }

    attack(): void {
        console.log(`${this.name} attacks with dragon breath!`);
    }
}