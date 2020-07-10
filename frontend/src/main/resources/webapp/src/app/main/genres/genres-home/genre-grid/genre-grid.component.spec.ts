import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GenreGridComponent} from './genre-grid.component';

describe('GenreGridComponent', () => {
  let component: GenreGridComponent;
  let fixture: ComponentFixture<GenreGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
