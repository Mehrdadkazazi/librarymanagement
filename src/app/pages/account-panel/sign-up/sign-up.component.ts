import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../service/api-service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../../service/notification.service';
import {AbstractUserModel} from '../../../share/models/abstract-user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private notificationService : NotificationService,
    private apiService: ApiService,
  ) {
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['' , Validators.required],
      password: ['' , Validators.required],
    })
  }


  Register() {
    if (this.userForm.invalid){
      this.notificationService.showWarning('Registeration Field', 'NOTE!');
      return;
    }

    let userModel= new AbstractUserModel();
    let formModel = this.userForm.value;
    userModel.username = formModel.username;
    userModel.password = formModel.password;

  }
}
