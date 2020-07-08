import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookCardSmallComponent} from './book-card-small.component';

describe('BookCardSmallComponent', () => {
  let component: BookCardSmallComponent;
  let fixture: ComponentFixture<BookCardSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCardSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
