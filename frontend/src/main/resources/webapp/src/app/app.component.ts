import {Component, OnInit} from '@angular/core';
import {LoginService} from "ontimize-web-ngx";

@Component({
    selector: 'o-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(public loginService: LoginService) {
    }

    ngOnInit() {
    }

}
