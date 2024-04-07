import { TestBed } from '@angular/core/testing';
import { CalculateService } from './calculate.service';
import { Triangle } from '../class/triangle';
import { Disk } from '../class/disk';
describe('CalculateService', () => {
  let service: CalculateService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateService);
  });
  it('Створення сервіса calculate', () => {
    expect(service).toBeTruthy();
  });
});
