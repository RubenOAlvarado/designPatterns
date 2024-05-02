import { Volume } from "./volume.interface";

export interface Edition{
    createVolume(): Volume;
}