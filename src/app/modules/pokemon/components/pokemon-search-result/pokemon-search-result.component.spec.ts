import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSearchResultComponent } from './pokemon-search-result.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TrimNameStringPipe } from '../../pipes/trim-name-string.pipe';

describe('PokemonSearchResultComponent', () => {
  let component: PokemonSearchResultComponent;
  let fixture: ComponentFixture<PokemonSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonSearchResultComponent, TrimNameStringPipe ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
