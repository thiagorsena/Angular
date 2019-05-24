import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLayoutComponent } from './cadastro-layout.component';

describe('CadastroLayoutComponent', () => {
  let component: CadastroLayoutComponent;
  let fixture: ComponentFixture<CadastroLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
