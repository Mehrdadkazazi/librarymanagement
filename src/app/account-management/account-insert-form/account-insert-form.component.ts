import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../../share/models/user.model';
import {ApiService} from '../../service/api-service';
import {DatePipe} from '@angular/common';
import {NotificationService} from '../../service/notification.service';

@Component({
  selector: 'app-account-insert-form',
  templateUrl: './account-insert-form.component.html',
  styleUrls: ['./account-insert-form.component.css']
})
@Injectable()
export class AccountInsertFormComponent implements OnInit {
  userForm: FormGroup;
  userModel: UserModel;
  responseObject: any;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    public datePipe: DatePipe,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: null,
      cardId: null,
      name: ['', Validators.required],
      family: ['', Validators.required],
      birthDate: ['', Validators.required],
      role: null,
      address: ['', Validators.required],
      nationalCode: ['', Validators.required],
    });
  }

  get showError() {
    return this.userForm.controls;
  }

  onSubmit() {

    this.submitted = true;

    if (this.userForm.invalid) {
      this.notificationService.showWarning('insert Fields', 'insert Fields');
      return;
    }
    let model = new UserModel();
    let form = this.userForm.value;
    model.id = form.id;
    model.cardId = form.cardId;
    model.name = form.name;
    model.family = form.family;
    model.birthDate = form.birthDate;
    model.role = form.role;
    model.address = form.address;
    model.nationalCode = form.nationalCode;

    this.apiService.addPerson(model).subscribe({
      next: this.onSuccess.bind(this),
      error: this.onError.bind(this)
    });
  }

  private onSuccess(response) {
    this.userForm.reset();
    this.notificationService.showSuccess(response.message, 'success');
  }

  private onError(error) {
    this.notificationService.showError(error.status, 'saveFailed');
  }

}
