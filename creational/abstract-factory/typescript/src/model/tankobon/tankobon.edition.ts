import { Edition } from "../../interface/edition.interface";
import { Volume } from "../../interface/volume.interface";
import { TankobonVolume } from "./tankobon.volume";

export class TankobonEdition implements Edition {
    createVolume(): Volume {
        const volumes = 42
        return new TankobonVolume(volumes);
    }
}