import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickerComponent } from './picker.component';
import { TruncateEllipsisStringPipe } from '../../pipes/truncate-ellipsis-string.pipe';
import { ReplaceDashPipe } from '../../pipes/replace-dash-string';

describe('PickerComponent', () => {
  let component: PickerComponent;
  let fixture: ComponentFixture<PickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickerComponent, TruncateEllipsisStringPipe, ReplaceDashPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
