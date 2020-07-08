import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthorsHomeComponent} from "./authors-home.component";

describe('AuthorHomeComponent', () => {
    let component: AuthorsHomeComponent;
    let fixture: ComponentFixture<AuthorsHomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AuthorsHomeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthorsHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});