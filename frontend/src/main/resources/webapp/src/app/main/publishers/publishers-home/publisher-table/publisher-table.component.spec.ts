import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PublisherTableComponent} from './publisher-table.component';

describe('PublisherTableComponent', () => {
  let component: PublisherTableComponent;
  let fixture: ComponentFixture<PublisherTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
