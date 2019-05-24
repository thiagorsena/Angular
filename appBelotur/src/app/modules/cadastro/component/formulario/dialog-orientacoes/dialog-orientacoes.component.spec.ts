import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOrientacoesComponent } from './dialog-orientacoes.component';

describe('DialogOrientacoesComponent', () => {
  let component: DialogOrientacoesComponent;
  let fixture: ComponentFixture<DialogOrientacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOrientacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOrientacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
