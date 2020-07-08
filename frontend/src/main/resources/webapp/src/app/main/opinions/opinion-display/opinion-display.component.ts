import {Component, Input, OnInit} from '@angular/core';
import {Opinion} from "../opinion";

@Component({
  selector: 'app-opinion-display',
  templateUrl: './opinion-display.component.html',
  styleUrls: ['./opinion-display.component.scss']
})
export class OpinionDisplayComponent implements OnInit {

  @Input() opinion: Opinion

  constructor() { }

  ngOnInit() {
  }

}
