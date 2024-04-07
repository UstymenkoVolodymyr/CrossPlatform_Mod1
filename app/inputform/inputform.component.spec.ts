import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { InputformComponent } from './inputform.component';
describe('InputformComponent', () => {
  let component: InputformComponent;
  let fixture: ComponentFixture<InputformComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputformComponent ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule]
    }).compileComponents();
    fixture = TestBed.createComponent(InputformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('Створення компонента inputform', () => {
    expect(component).toBeTruthy();
  });
});
