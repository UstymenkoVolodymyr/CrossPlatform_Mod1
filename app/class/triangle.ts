import { IShape } from "../interface/ishape";
export class Triangle implements IShape {
    a: number = 0;
    b: number = 0;
    c: number = 0;
    constructor() {
        let ok: boolean = false;
        let a: number = 0;
        let b: number = 0;
        let c: number = 0;
        while (ok == false) {
            a = Math.floor(Math.random() * 100) + 1;
            b = Math.floor(Math.random() * 100) + 1;
            c = Math.floor(Math.random() * 100) + 1;
            if (a < b + c && b < c + a && c < a + b) {
                ok = true;
            }
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Perimeter(): number {
        return this.a + this.b + this.c;
    }
    Area(): number {
        let p = this.Perimeter()/2;
        return Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
    }
}