import { Pokemon } from "../interfaces/pokemon.interface";

export class ElectricPokemon implements Pokemon {
    name: string;
    type: string;

    constructor(name: string) {
        this.name = name;
        this.type = 'electric';
    }

    attack(): void {
        console.log(`${this.name} attacks with thunderbolt!`);
    }
}