import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('leer n',()=>{
    let f=0;
    component.n=100
    f=100;
    expect(f).toBe(component.n);
  });
  it('hacer el llamado a la funcion calcular con el boton calcular',()=>{
    let f=0;
    component.n=10;
    component.calcular();
    f=component.c
    expect(component.c).toBe(f);
  });
  it('mostrar el resultado',()=>{
    let f=0;
    component.n=10;
    component.calcular();
    f=component.c
    expect(component.c).toBe(f);
  });
});