import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OpinionEditComponent} from './opinion-edit.component';

describe('OpinionEditComponent', () => {
  let component: OpinionEditComponent;
  let fixture: ComponentFixture<OpinionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpinionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
