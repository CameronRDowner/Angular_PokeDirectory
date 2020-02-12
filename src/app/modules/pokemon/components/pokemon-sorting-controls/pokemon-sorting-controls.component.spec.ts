import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSortingControlsComponent } from './pokemon-sorting-controls.component';

describe('PokemonSortingControlsComponent', () => {
  let component: PokemonSortingControlsComponent;
  let fixture: ComponentFixture<PokemonSortingControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonSortingControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSortingControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
