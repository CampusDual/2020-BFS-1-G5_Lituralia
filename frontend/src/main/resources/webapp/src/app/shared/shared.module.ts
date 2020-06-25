import {NgModule} from '@angular/core';
import {OntimizeWebModule} from 'ontimize-web-ngx';
import {CommonModule} from '@angular/common';
import {OTableColumnRendererStarRatingComponent} from "./cell-renderers/o-table-column-renderer-star-rating.component";
import {StarRatingPipe} from "./pipes/star-rating.pipe";


@NgModule({
    imports: [
        OntimizeWebModule
    ],
    declarations: [
        OTableColumnRendererStarRatingComponent,
        StarRatingPipe],
    exports: [
        CommonModule,
        OTableColumnRendererStarRatingComponent,
        StarRatingPipe
    ]
})
export class SharedModule {
}
