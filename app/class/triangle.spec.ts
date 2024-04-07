import { Triangle } from "./triangle";
describe('Triangle', () => {
    let triangle:Triangle;
    beforeEach(()=>{
        triangle = new Triangle();
    })
    it("Генерація випадкових чисел",()=>{
        expect(triangle.a).toBeGreaterThan(0);
        expect(triangle.b).toBeGreaterThan(0);
        expect(triangle.c).toBeGreaterThan(0);
    });
    it("Перевірка нерівності трикутника",()=>{
        expect(triangle.a + triangle.b).toBeGreaterThan(triangle.c);
        expect(triangle.b + triangle.c).toBeGreaterThan(triangle.a);
        expect(triangle.c + triangle.a).toBeGreaterThan(triangle.b);
    });
    it("Створення об'єкта triangle",()=>{
        expect(triangle).toBeTruthy();
    });
    it("Перевірка методу Perimeter()",()=>{
        let P = triangle.a + triangle.b + triangle.c;
        expect(triangle.Perimeter()).toBe(P);
    });
    it("Перевірка методу Area()",()=>{
        let p = triangle.Perimeter() / 2;
        let A = Math.sqrt(p * (p - triangle.a) * (p - triangle.b) * (p - triangle.c));
        expect(triangle.Area()).toBe(A);
    });
});