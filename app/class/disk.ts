import { IShape } from "../interface/ishape";
export class Disk implements IShape {
    r: number = 0;
    constructor() {
        this.r = Math.floor(Math.random() * 100) + 1;
    }
    Perimeter(): number {
        return 2*Math.PI*this.r;
    }
    Area(): number {
        return Math.PI*(this.r**2);
    }
}