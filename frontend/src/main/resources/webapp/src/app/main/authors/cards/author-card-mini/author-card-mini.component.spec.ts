import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthorCardMiniComponent} from './author-card-mini.component';

describe('AuthorCardMiniComponent', () => {
  let component: AuthorCardMiniComponent;
  let fixture: ComponentFixture<AuthorCardMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorCardMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorCardMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
