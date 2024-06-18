import { Gen2 } from "../interfaces/gen2.interface";
import { Pokemon } from "../interfaces/pokemon.interface";

export class Gen2Adapter implements Pokemon{
    constructor(private gen2: Gen2) { }

    get id(): number {
        return this.gen2.Identifier;
    }

    get name(): string {
        return this.gen2.Name;
    }

    get type(): string {
        return this.gen2.Type;
    }
}