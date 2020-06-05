import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksHomeComponent } from './books-home.component';

describe('BooksHomeComponent', () => {
  let component: BooksHomeComponent;
  let fixture: ComponentFixture<BooksHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
