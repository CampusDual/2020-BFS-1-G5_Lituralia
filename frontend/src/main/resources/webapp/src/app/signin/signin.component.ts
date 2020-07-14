import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogService, LoginService, OTranslateService} from "ontimize-web-ngx";
import {SigninService} from "../shared/services/signin.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  username: FormControl;
  email: FormControl;
  name: FormControl;
  surname: FormControl;
  password: FormControl;
  password2: FormControl;
  private static SIGNIN_ERROR_TITLE: string = "SIGNIN_ERROR_TITLE";
  private static SIGNIN_ERROR: string = "SIGNIN_ERROR";
  private static SIGNIN_SUCCESS_TITLE: string = "SIGNIN_SUCCESS_TITLE";
  private static SIGNIN_SUCCESS: string = "SIGNIN_SUCCESS";


  constructor(private actRoute: ActivatedRoute,
              public loginService: LoginService,
              private router: Router,
              private userService: SigninService,
              private dialogService: DialogService,
              private translate: OTranslateService) {
  }

  ngOnInit() {


    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl(''),
      surname: new FormControl(''),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(32), this.checkPasswordsTrigger.bind(this)])),
      password2: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(32), this.passwordMatchValidator.bind(this)]))
    });

    // this.signinForm.setValidators(SigninComponent.passwordMatchValidator)
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['../'], {relativeTo: this.actRoute});
    }
  }


  signin() {
    if (!this.signinForm.valid) {
      alert('Campos no válidos');
      return
    }
    const username = this.signinForm.value['username'];
    const email = this.signinForm.value['email'];
    const name = this.signinForm.value['name'];
    const surname = this.signinForm.value['surname'];
    const password = this.signinForm.value['password'];

    this.userService.registerUser({
      user_: username,
      email: email,
      name: name,
      surname: surname,
      password: password
    }).subscribe(
      success => {
        if (success) {
          this.loginService.login(username, password).subscribe(
            value1 => {
              this.dialogService.info(this.translate.get(SigninComponent.SIGNIN_SUCCESS_TITLE), this.translate.get(SigninComponent.SIGNIN_SUCCESS))
              this.router.navigate(['../'], {relativeTo: this.actRoute})
            },
            error => this.router.navigate(['../login'], {relativeTo: this.actRoute}),
          )
        } else {
          this.dialogService.error(this.translate.get(SigninComponent.SIGNIN_ERROR_TITLE), this.translate.get(SigninComponent.SIGNIN_ERROR))
        }
      },
      error => this.dialogService.error(this.translate.get(SigninComponent.SIGNIN_ERROR_TITLE), this.translate.get(SigninComponent.SIGNIN_ERROR))
    )
  }


  handleError(error?) {
    this.dialogService.error(this.translate.get(SigninComponent.SIGNIN_ERROR_TITLE), this.translate.get(SigninComponent.SIGNIN_ERROR))
    if (error)
      console.error(error)
  }


  passwordMatchValidator(group: FormControl) {
    if (this.signinForm && group && group.value && group.value !== this.signinForm.controls['password'].value) {
      return {passwordNotMatch: true};
    } else {
      return null;
    }
  }

  checkPasswordsTrigger(control: FormControl) {
    if (this.signinForm) {
      this.signinForm.controls['password2'].updateValueAndValidity();
    }
    return null;
  }

}
