import { Edition } from "../../interface/edition.interface";
import { Volume } from "../../interface/volume.interface";
import { KanzenbanVolume } from "./kanzenban.volume";

export class KanzenbanEdition implements Edition {
    createVolume(): Volume {
        const volumes = 32;
        return new KanzenbanVolume(volumes);
    }
}