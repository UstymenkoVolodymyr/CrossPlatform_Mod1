import { Disk } from "./disk";
describe('Disk', () => {
    let disk:Disk;
    beforeEach(()=>{
        disk = new Disk();
    })
    it("Генерація випадкових чисел",()=>{
        expect(disk.r).toBeGreaterThan(0);
    });
    it("Створення об'єкта disk",()=>{
        expect(disk).toBeTruthy();
    });
    it("Перевірка методу Perimeter()",()=>{
        let P = 2 * Math.PI * disk.r;
        expect(disk.Perimeter()).toBe(P);
    });
    it("Перевірка методу Area()",()=>{
        let A = Math.PI * (disk.r ** 2);
        expect(disk.Area()).toBe(A);
    });
});