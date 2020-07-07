import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PublisherCardMediumComponent} from './publisher-card-medium.component';

describe('PublisherCardMediumComponent', () => {
  let component: PublisherCardMediumComponent;
  let fixture: ComponentFixture<PublisherCardMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherCardMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherCardMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
