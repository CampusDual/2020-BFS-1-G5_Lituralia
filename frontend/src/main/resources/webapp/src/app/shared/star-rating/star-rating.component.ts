import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input() rating: number = 0;
  @Input() ratings: number = 0;
  @Input() height: number = 25;
  @Input() fluid: boolean = true

  constructor() {
  }

  ngOnInit() {
  }

}
