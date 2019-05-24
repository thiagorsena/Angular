import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarFotoComponent } from './validar-foto.component';

describe('ValidarFotoComponent', () => {
  let component: ValidarFotoComponent;
  let fixture: ComponentFixture<ValidarFotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarFotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
