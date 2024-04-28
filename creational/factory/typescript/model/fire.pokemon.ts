import { Pokemon } from "../interfaces/pokemon.interface";

export class FirePokemon implements Pokemon {
    name: string;
    type: string;

    constructor(name: string) {
        this.name = name;
        this.type = 'fire';
    }

    attack(): void {
        console.log(`${this.name} attacks with fire!`);
    }
}