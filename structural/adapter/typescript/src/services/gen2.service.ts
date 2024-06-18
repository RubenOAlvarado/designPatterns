import { Gen2 } from "../interfaces/gen2.interface";

export class Gen2Service{
    getPokemon(): Gen2[] {
        return [
            { Identifier: 152, Name: "Chikorita", Type: "Grass" },
            { Identifier: 153, Name: "Bayleef", Type: "Grass" },
            { Identifier: 154, Name: "Meganium", Type: "Grass" },
            { Identifier: 155, Name: "Cyndaquil", Type: "Fire" },
            { Identifier: 156, Name: "Quilava", Type: "Fire" },
            { Identifier: 157, Name: "Typhlosion", Type: "Fire" },
            { Identifier: 158, Name: "Totodile", Type: "Water" },
            { Identifier: 159, Name: "Croconaw", Type: "Water" },
            { Identifier: 160, Name: "Feraligatr", Type: "Water" },
        ];
    }
}