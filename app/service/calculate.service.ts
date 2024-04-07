import { Injectable } from '@angular/core';
import { IShape } from '../interface/ishape';
@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  constructor() {}
  ProcessArray( array: IShape[]):{perimeter: number, area: number}[] {
    let PAArray: {perimeter: number, area: number}[] = new Array(array.length);
    for (let i = 0; i < array.length; i++) {
      PAArray[i] = { perimeter: 0, area: 0 };
      PAArray[i].perimeter = parseFloat(array[i].Perimeter().toFixed(5));
      PAArray[i].area = parseFloat(array[i].Area().toFixed(5));
    }
    return PAArray;
  }
}
