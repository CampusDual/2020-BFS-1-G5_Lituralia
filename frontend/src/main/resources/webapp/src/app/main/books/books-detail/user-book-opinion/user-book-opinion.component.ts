import {Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {OpinionService} from "../../../../shared/services/opinion.service";
import {ActivatedRoute} from "@angular/router";
import {DialogService, LoginService, OTranslateService} from "ontimize-web-ngx";
import {Opinion} from "../../../opinions/opinion";

@Component({
  selector: 'app-user-book-opinion',
  templateUrl: './user-book-opinion.component.html',
  styleUrls: ['./user-book-opinion.component.scss']
})
export class UserBookOpinionComponent implements OnInit {

  @Output() reloadBook = new EventEmitter<any>();

  @ViewChild("activeReview") aReview: ElementRef;
  @ViewChild("activeRating") aRating: ElementRef;

  user: string = "";

  opinion: Opinion = null;
  private book_id: number;

  public activeEditReview: string = ""
  public activeEditRating: number = 0

  editMode: boolean = false;

  ratingValues: Array<Object>;

  constructor(private loginService: LoginService,
              private opinionService: OpinionService,
              private route: ActivatedRoute,
              private renderer: Renderer2,
              private dialogService: DialogService,
              private translate: OTranslateService) {

  }


  ngOnInit() {
    this.user = this.loginService.getSessionInfo().user
    this.book_id = +this.route.snapshot.paramMap.get('book_id');
    this.getUserOpinion();
    this.ratingValues = this.genRatingValues()
  }

  private getUserOpinion() {
    this.opinionService.getUserOpinion(this.user, +this.book_id).subscribe(value => {
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
    const reviewElement: any = this.aReview
    const review: string = reviewElement.value.value
    const ratingElement: any = this.aRating
    const rating: string = ratingElement.value.value
    this.opinionService.updateUserOpinion(this.opinion.opinion_id, +rating, review)
    .subscribe(
      value => this.dialogService.info(this.translate.get(this.UPDATING_OPINION), this.translate.get(this.UPDATING_OPINION_OK)),
      error => this.dialogService.error(this.translate.get(this.UPDATING_OPINION), this.translate.get(this.UPDATING_OPINION_ERROR)),
      () =>{
        this.getUserOpinion()
        this.reloadBook.emit()
      }
    )
  }

  createOpinion() {
    const reviewElement: any = this.aReview
    const review: string = reviewElement.value.value
    const ratingElement: any = this.aRating
    const rating: string = ratingElement.value.value
    this.opinionService.createUserOpinion(this.loginService.getSessionInfo().user, this.book_id, +rating, review)
    .subscribe(
      value => this.dialogService.info(this.translate.get(this.CREATING_OPINION), this.translate.get(this.CREATING_OPINION_OK)),
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


  genRatingValues() {
    const array: Array<Object> = [];
    array.push({
      'rating': 0
    });
    array.push({
      'rating': 1
    });
    array.push({
      'rating': 2
    });
    array.push({
      'rating': 3
    });
    array.push({
      'rating': 4
    });
    array.push({
      'rating': 5
    });
    return array;
  }
}
