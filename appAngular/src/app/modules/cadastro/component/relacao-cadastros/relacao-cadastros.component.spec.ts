import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacaoCadastrosComponent } from './relacao-cadastros.component';

describe('RelacaoCadastrosComponent', () => {
  let component: RelacaoCadastrosComponent;
  let fixture: ComponentFixture<RelacaoCadastrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelacaoCadastrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelacaoCadastrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
