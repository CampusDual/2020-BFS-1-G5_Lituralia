import {Component, Input, OnInit} from '@angular/core';
import {Publisher} from "../../publisher";

@Component({
  selector: 'app-publisher-card-small',
  templateUrl: './publisher-card-small.component.html',
  styleUrls: ['./publisher-card-small.component.scss']
})
export class PublisherCardSmallComponent implements OnInit {

  @Input() publisher: Publisher
  constructor() { }

  ngOnInit() {
  }

}
