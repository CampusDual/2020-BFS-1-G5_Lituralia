import {Component, OnInit, ViewChild} from '@angular/core';
import {OTableButtonComponent} from "ontimize-web-ngx";
import {Router} from "@angular/router";

@Component({
  selector: 'app-genre-home',
  templateUrl: './genres-home.component.html',
  styleUrls: ['./genres-home.component.scss']
})
export class GenresHomeComponent implements OnInit {

  // @ViewChild('genre_top')
  // protected genre_top: OTableButtonComponent;
  //
  // ngAfterViewInit() {
  //   this.genre_top.onClick.subscribe(event => {
  //     this.router.navigate(['/main','/genres','/top'])
  //   });
  // }


  constructor(private router: Router) {

  }

  ngOnInit() {
  }

}
