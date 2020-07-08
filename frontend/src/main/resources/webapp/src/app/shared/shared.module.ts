import {NgModule} from '@angular/core';
import {OntimizeWebModule} from 'ontimize-web-ngx';
import {CommonModule} from '@angular/common';
import {StarRatingPipe} from "./star-rating/star-rating.pipe";
import {StarRatingComponent} from './star-rating/star-rating.component';
import {OTableCellRendererStarRatingComponent} from './star-rating/o-table-cell-renderer-star-rating/o-table-cell-renderer-star-rating.component';


@NgModule({
    imports: [
        OntimizeWebModule
    ],
    declarations: [
        StarRatingPipe,
        StarRatingComponent,
        OTableCellRendererStarRatingComponent],
    exports: [
        CommonModule,
        StarRatingPipe,
        OTableCellRendererStarRatingComponent,
        StarRatingComponent
    ]
})
export class SharedModule {
}
