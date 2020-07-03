import {Component, OnInit} from '@angular/core';
import {LoginService, OComboComponent} from "ontimize-web-ngx";
import {Router} from "@angular/router";

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.scss']
})
export class BooksDetailComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router) {
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


  onPublisherClick(combo: OComboComponent) {
    if(combo){
      if(combo.value){
        if(combo.value.value){
          this.router.navigate(['/main', 'publishers', combo.value.value])
        }
      }
    }
  }
}