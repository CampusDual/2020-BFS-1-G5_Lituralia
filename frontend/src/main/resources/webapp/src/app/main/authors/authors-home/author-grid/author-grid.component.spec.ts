import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorGridComponent } from './author-grid.component';

describe('AuthorGridComponent', () => {
  let component: AuthorGridComponent;
  let fixture: ComponentFixture<AuthorGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
