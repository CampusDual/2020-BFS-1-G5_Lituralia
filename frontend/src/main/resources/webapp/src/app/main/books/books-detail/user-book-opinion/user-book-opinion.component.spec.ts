import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserBookOpinionComponent} from './user-book-opinion.component';

describe('UserBookOpinionComponent', () => {
  let component: UserBookOpinionComponent;
  let fixture: ComponentFixture<UserBookOpinionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBookOpinionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBookOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
