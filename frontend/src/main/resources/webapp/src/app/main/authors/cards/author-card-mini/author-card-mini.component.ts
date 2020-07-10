import {Component, Input, OnInit} from '@angular/core';
import {Author} from "../../../../shared/domain/author";

@Component({
  selector: 'app-author-card-mini',
  templateUrl: './author-card-mini.component.html',
  styleUrls: ['./author-card-mini.component.scss']
})
export class AuthorCardMiniComponent implements OnInit {

  @Input() author: Author

  constructor() { }

  ngOnInit() {
  }

}
