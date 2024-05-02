import { Volume } from "../../interface/volume.interface";

export class KanzenbanVolume implements Volume {
    constructor(public volumes: number) {
    }

    display(): void {
        console.log(`Kanzenban edition with ${this.volumes} volumes.`);
    }
}