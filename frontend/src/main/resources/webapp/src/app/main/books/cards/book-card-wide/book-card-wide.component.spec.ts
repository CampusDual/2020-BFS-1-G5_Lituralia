import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookCardWideComponent} from './book-card-wide.component';

describe('BookCardWideComponent', () => {
  let component: BookCardWideComponent;
  let fixture: ComponentFixture<BookCardWideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCardWideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCardWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
