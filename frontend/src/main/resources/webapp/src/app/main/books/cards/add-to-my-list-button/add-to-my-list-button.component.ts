import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-to-my-list-button',
  templateUrl: './add-to-my-list-button.component.html',
  styleUrls: ['./add-to-my-list-button.component.scss']
})
export class AddToMyListButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() isInList: boolean;

  @Output() toggle = new EventEmitter();

  toggleBookOnMyList(){
    this.toggle.emit()
  }
}
