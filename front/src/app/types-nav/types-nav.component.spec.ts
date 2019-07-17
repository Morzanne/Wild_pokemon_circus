import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesNavComponent } from './types-nav.component';

describe('TypesNavComponent', () => {
  let component: TypesNavComponent;
  let fixture: ComponentFixture<TypesNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
