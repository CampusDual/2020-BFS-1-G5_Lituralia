import {Component, Injector, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {OTableCellRendererRealComponent} from "ontimize-web-ngx";

@Component({
  selector: 'o-table-cell-renderer-star-rating',
  template: `
    <ng-template #templateref let-cellvalue=\"cellvalue\" let-rowvalue=\"rowvalue\">
      <app-star-rating [rating]="getRating(rowvalue)" [ratings]="getRatings(rowvalue)" [fluid]="false" height="25" ></app-star-rating>
    </ng-template>
  `,
  styleUrls: []
})
export class OTableCellRendererStarRatingComponent extends OTableCellRendererRealComponent implements OnInit {

  @ViewChild('templateref', { read: TemplateRef }) public templateref: TemplateRef<any>;

  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

  getCellData(cellvalue: any, rowvalue?: any): string {
    return this.getRating(rowvalue)
  }

  getRating(rowvalue?: any) {
    return rowvalue["avg_rating"]
  }

  getRatings(rowvalue?: any) {
    return rowvalue["ratings"]
  }

}
