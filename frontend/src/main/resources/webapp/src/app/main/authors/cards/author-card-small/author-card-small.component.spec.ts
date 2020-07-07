import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorCardSmallComponent } from './author-card-small.component';

describe('AuthorCardSmallComponent', () => {
  let component: AuthorCardSmallComponent;
  let fixture: ComponentFixture<AuthorCardSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorCardSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
