import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorCardMediumComponent } from './author-card-medium.component';

describe('AuthorCardMediumComponent', () => {
  let component: AuthorCardMediumComponent;
  let fixture: ComponentFixture<AuthorCardMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorCardMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorCardMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
