import {Component, OnInit} from '@angular/core';
import {LoginService} from "ontimize-web-ngx";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    user = "USERNAME";

    constructor(public loginService: LoginService) {
    }

    ngOnInit() {
        console.log(this.loginService.getSessionInfo())
        this.user = this.loginService.getSessionInfo().user
    }


    logout() {
        this.loginService.logoutWithConfirmationAndRedirect()
    }
}
