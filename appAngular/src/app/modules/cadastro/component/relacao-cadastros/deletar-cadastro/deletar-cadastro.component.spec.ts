import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarCadastroComponent } from './deletar-cadastro.component';

describe('DeletarCadastroComponent', () => {
  let component: DeletarCadastroComponent;
  let fixture: ComponentFixture<DeletarCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
