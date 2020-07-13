import {Component, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {StarRatingComponent} from "ng-starrating";
import {Opinion} from "../../../shared/domain/opinion";
import {OpinionService} from "../../../shared/services/opinion.service";
import {ActivatedRoute} from "@angular/router";
import {DialogService, OTranslateService} from "ontimize-web-ngx";

@Component({
  selector: 'app-opinion-edit',
  templateUrl: './opinion-edit.component.html',
  styleUrls: ['./opinion-edit.component.scss']
})
export class OpinionEditComponent implements OnInit {

  @Input() public book_id: number;
  @Input() public showCover: boolean = false;

  @Output() reloadBook = new EventEmitter<any>();

  @ViewChild("activeReview") aReview: any;
  @ViewChild("activeRating") aRating: StarRatingComponent;


  opinion: Opinion = null;

  public activeEditReview: string = ""
  public activeEditRating: number = 0

  editMode: boolean = false;

  ratingValues: Array<Object>;

  constructor(
    private opinionService: OpinionService,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private dialogService: DialogService,
    private translate: OTranslateService) {

  }


  ngOnInit() {
    this.getUserOpinion();
  }

  private getUserOpinion() {
    this.opinionService.getUserOpinion(this.book_id).subscribe(value => {
      this.opinion = value.data[0]
      this.editMode = this.hasOpinion()
      if (this.editMode) {
        this.activeEditReview = this.opinion.review
        this.activeEditRating = this.opinion.rating
      } else {
        this.activeEditRating = 1
        this.activeEditReview = ""
      }
    })
  }

  isUpdated() {
    if (this.opinion === null)
      return false
    return typeof this.opinion.opinion_update !== 'undefined'
  }

  hasOpinion(): boolean {
    return this.opinion !== null && typeof this.opinion !== 'undefined'
  }

  private readonly UPDATING_OPINION = "UPDATING_OPINION";
  private readonly UPDATING_OPINION_OK = "UPDATING_OPINION_OK";
  private readonly UPDATING_OPINION_ERROR = "UPDATING_OPINION_ERROR";

  private readonly DELETING_OPINION = "DELETING_OPINION";
  private readonly DELETING_OPINION_OK = "DELETING_OPINION_OK";
  private readonly DELETING_OPINION_ERROR = "DELETING_OPINION_ERROR";

  private readonly CREATING_OPINION = "CREATING_OPINION";
  private readonly CREATING_OPINION_OK = "CREATING_OPINION_OK";
  private readonly CREATING_OPINION_ERROR = "CREATING_OPINION_ERROR";

  updateOpinion() {
    const review: string = this.aReview.value.value
    const rating: number = this.aRating.value
    this.opinionService.updateUserOpinion(this.opinion.opinion_id, rating, review)
    .subscribe(
      value => {
        // this.dialogService.info(this.translate.get(this.UPDATING_OPINION), this.translate.get(this.UPDATING_OPINION_OK))
      },
      error => this.dialogService.error(this.translate.get(this.UPDATING_OPINION), this.translate.get(this.UPDATING_OPINION_ERROR)),
      () => {
        this.getUserOpinion()
        this.reloadBook.emit()
      }
    )
  }

  createOpinion() {
    const review: string = this.aReview.value.value
    const rating: number = this.aRating.value
    this.opinionService.createUserOpinion(this.book_id, rating, review)
    .subscribe(
      value => {
        // this.dialogService.info(this.translate.get(this.CREATING_OPINION), this.translate.get(this.CREATING_OPINION_OK))
      },
      error => this.dialogService.error(this.translate.get(this.CREATING_OPINION), this.translate.get(this.CREATING_OPINION_ERROR)),
      () => {
        this.getUserOpinion()
        this.reloadBook.emit()
      }
    )
  }

  deleteOpinion() {
    this.opinionService.deleteUserOpinion(this.opinion.opinion_id)
    .subscribe(
      value => this.dialogService.info(this.translate.get(this.DELETING_OPINION), this.translate.get(this.DELETING_OPINION_OK)),
      error => this.dialogService.error(this.translate.get(this.DELETING_OPINION), this.translate.get(this.DELETING_OPINION_ERROR)),
      () => {
        this.getUserOpinion()
        this.reloadBook.emit()
      }
    )
  }


  onRate() {
    this.editMode ? this.updateOpinion() : this.createOpinion()
  }
}