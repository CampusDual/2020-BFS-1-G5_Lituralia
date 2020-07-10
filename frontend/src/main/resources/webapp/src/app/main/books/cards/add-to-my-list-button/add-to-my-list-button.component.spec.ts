import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddToMyListButtonComponent} from './add-to-my-list-button.component';

describe('AddToMyListButtonComponent', () => {
  let component: AddToMyListButtonComponent;
  let fixture: ComponentFixture<AddToMyListButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToMyListButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToMyListButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
