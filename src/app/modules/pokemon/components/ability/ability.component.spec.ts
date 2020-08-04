import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityComponent } from './ability.component';
import { ReplaceDashPipe } from 'src/app/shared/pipes/replace-dash-string';

describe('PokemonAbilityComponent', () => {
  let component: AbilityComponent;
  let fixture: ComponentFixture<AbilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilityComponent, ReplaceDashPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
