import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OpinionDisplayComponent} from './opinion-display.component';

describe('OpinionDisplayComponent', () => {
  let component: OpinionDisplayComponent;
  let fixture: ComponentFixture<OpinionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpinionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
