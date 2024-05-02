import { Volume } from "../../interface/volume.interface";

export class TankobonVolume implements Volume {
    constructor(private volumes: number) {
    }

    display(): void {
        console.log(`Tankobon edition with ${this.volumes} volumes`);
    }
}