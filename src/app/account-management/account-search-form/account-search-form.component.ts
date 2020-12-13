import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../../service/api-service';
import {UserModel} from '../../share/models/user.model';

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
      this.apiService.searchAllUser(model).subscribe(x => {
        this.userList = x.data;
        return;
      });
    } else {
      this.apiService.searchAllUser(model).subscribe(x => {
        this.userList = x;
        return;
      });
    }
  }
}
