import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PublisherCardSmallComponent} from './publisher-card-small.component';

describe('PublisherCardSmallComponent', () => {
  let component: PublisherCardSmallComponent;
  let fixture: ComponentFixture<PublisherCardSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherCardSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
