import {Component, Injector, TemplateRef, ViewChild} from '@angular/core';
import {OTableCellRendererImageComponent} from "ontimize-web-ngx";

@Component({
  selector: 'o-table-column-renderer-star-rating',
  template: `
    <ng-template #templateref let-cellvalue="cellvalue">
      <div [ngClass]="{'image-avatar':avatar,'image-plain':!avatar}">
        <img id="starImg" height="25px" src="{{cellvalue | starRating}}" alt="" title="{{'Rating: ' + cellvalue}}"><label for="starImg"> ({{cellvalue ? cellvalue
          : '-'}})</label>
      </div>
    </ng-template>
  `,
  styles: []
})
export class OTableColumnRendererStarRatingComponent extends OTableCellRendererImageComponent {
  @ViewChild('templateref', {read: TemplateRef}) public templateref: TemplateRef<any>;

  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit() {

  }

}