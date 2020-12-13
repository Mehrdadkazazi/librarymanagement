import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../../service/api-service';
import {UserModel} from '../../share/models/user.model';
import {NotificationService} from '../../service/notification.service';

@Component({
  selector: 'app-account-search-form',
  templateUrl: './account-search-form.component.html',
  styleUrls: ['./account-search-form.component.css']
})
export class AccountSearchFormComponent implements OnInit {

  userForm: FormGroup;
  userList: UserModel [];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private notificationService: NotificationService,
  ) {
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      cardId: null,
      name: null,
      family: null,
      role: null,
      nationalCode: null,
    });
  }

  searchAccount() {
    let form = this.userForm.value;
    let model = new UserModel();
    model.name = form.name;
    model.family = form.family;
    model.cardId = form.cardId;
    model.nationalCode = form.nationalCode;

    if (model.name || model.family || model.cardId || model.nationalCode) {
      this.apiService.searchAllUser(model).subscribe({
        next: this.onSuccess.bind(this),
        error: this.onError.bind(this),
      });
    } else {
      this.notificationService.showError('no item found', 'ERROR');
    }
  }

  private onSuccess(response) {
    this.userList = response.data;
    this.notificationService.showInfo(response.message, 'info');
  }

  private onError(error) {
    this.notificationService.showError(error.status, 'SearchFailed');
  }
}
