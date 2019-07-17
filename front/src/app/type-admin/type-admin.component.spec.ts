import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAdminComponent } from './type-admin.component';

describe('TypeAdminComponent', () => {
  let component: TypeAdminComponent;
  let fixture: ComponentFixture<TypeAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
