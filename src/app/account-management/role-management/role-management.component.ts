import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserModel} from '../../share/models/user.model';
import {ApiService} from '../../service/api-service';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent implements OnInit {
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
      this.apiService.searchUserByFilter(model).subscribe(x => {
        this.userList = x;
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
