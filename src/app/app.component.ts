import {Component, OnInit} from '@angular/core';
import {ApiService} from './service/api-service';
import {AbstractUserModel} from './share/models/abstract-user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from './service/notification.service';
import {AuthService} from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  logInForm: FormGroup;
  userModel: AbstractUserModel;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private abstractUser: AbstractUserModel,
    private notificationService : NotificationService,
    private authService : AuthService,
  ) {
    this.logInPageStatus = true;
  }

  ngOnInit() {
    this.logInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password : ['' , Validators.required]
    });


    // this.apiService.loginService(this.abstractUser).subscribe(x => {
    //   this.abstractUser.jwt = x;
    // });
  }

  title = 'front';
  logInPageStatus: boolean;
  HomePath: string;

  signIn() {

    this.logInPageStatus = false;
    if (this.logInForm.invalid){
      this.notificationService.showWarning("logIn failed" , "Alert !")
      return;
    }
    let logInUserModel = new AbstractUserModel();
    let formLogInUser = this.logInForm.value;
    logInUserModel.username = formLogInUser.username;
    logInUserModel.password = formLogInUser.password;

    this.apiService.loginService(logInUserModel).subscribe({
      next : this.onSuccess.bind(this),
      error : this.onError.bind(this),
    })

  }
  private onSuccess(response){
    this.authService.setToken(response.jwt);
    this.notificationService.showSuccess(response, 'success');
    this.HomePath = 'book';
  }

  private onError(error){

    this.notificationService.showError(error.status, 'saveFailed');
  }
}
