import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonOfTheDayComponent } from './pokemon-of-the-day.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReversePipe } from 'src/app/shared/pipes/reverse-array.pipe';

describe('PokemonOfTheDayComponent', () => {
  let component: PokemonOfTheDayComponent;
  let fixture: ComponentFixture<PokemonOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonOfTheDayComponent, ReversePipe ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
