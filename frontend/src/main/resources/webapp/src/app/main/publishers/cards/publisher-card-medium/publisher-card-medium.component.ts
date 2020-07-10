import {Component, Input, OnInit} from '@angular/core';
import {Publisher} from "../../../../shared/domain/publisher";

@Component({
  selector: 'app-publisher-card-medium',
  templateUrl: './publisher-card-medium.component.html',
  styleUrls: ['./publisher-card-medium.component.scss']
})
export class PublisherCardMediumComponent implements OnInit {

  @Input() publisher: Publisher
  
  constructor() { }

  ngOnInit() {
  }
  

  addToMyList(publisher_id: number) {

  }

  reviewPopup(publisher_id: number) {

  }
}
