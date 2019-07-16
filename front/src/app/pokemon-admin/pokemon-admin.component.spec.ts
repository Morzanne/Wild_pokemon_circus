import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAdminComponent } from './pokemon-admin.component';

describe('PokemonAdminComponent', () => {
  let component: PokemonAdminComponent;
  let fixture: ComponentFixture<PokemonAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
