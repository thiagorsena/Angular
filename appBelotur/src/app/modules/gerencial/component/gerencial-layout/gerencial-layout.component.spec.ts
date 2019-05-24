import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerencialLayoutComponent } from './gerencial-layout.component';

describe('GerencialLayoutComponent', () => {
  let component: GerencialLayoutComponent;
  let fixture: ComponentFixture<GerencialLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerencialLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerencialLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
