import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input() rating: number = 0;
  @Input() ratings: number = 0;
  @Input() height;
  @Input() width;
  @Input() fluid: boolean = false

  constructor() {
  }

  ngOnInit() {
  }

}
