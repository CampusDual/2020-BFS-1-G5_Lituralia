import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  // @Input() rating: number = 0;
  // @Input() height;
  // @Input() width;
  // @Input() fluid: boolean = false

  @Input() rating = 0
  @Input() ratings = 0;
  @Input() height = 25;
  @Input() checkedColor = 'gold'
  @Input() uncheckedcolor = 'black'
  @Input() totalstars = 5
  @Input() readonly =true

  @Output() rate = new EventEmitter<{ oldValue: number; newValue: number }>()

  constructor() {
  }

  ngOnInit() {
  }

  onRate($event: { oldValue: number; newValue: number }) {
    this.rate.emit($event)
  }
}
