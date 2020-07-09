import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PublisherGridComponent} from './publisher-grid.component';

describe('PublisherGridComponent', () => {
  let component: PublisherGridComponent;
  let fixture: ComponentFixture<PublisherGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
