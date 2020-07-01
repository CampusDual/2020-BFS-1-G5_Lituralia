import {Component, OnInit} from '@angular/core';
import {LoginService} from "ontimize-web-ngx";

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.scss']
})
export class BooksDetailComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  void() {

  }

  public isLoggedIn() {
    return this.loginService.isLoggedIn()
  }

  getImageSrc(base64: any) {
    return 'data:image/png;base64,'+base64;
  }
}