import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../share/models/user.model';
import {ApiService} from '../../service/api-service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-account-panel-list',
  templateUrl: './account-panel-list.component.html',
  styleUrls: ['./account-panel-list.component.css']
})
export class AccountPanelListComponent implements OnInit {

  userForm: FormGroup;
  userModel: UserModel;
  @Input() userList: UserModel [];
  responseObject : any;
  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: null,
      cardId: null,
      name: null,
      family: null,
      birthDate: null,
      role: null,
      address: null,
      nationalCode: null,
    });
  }

  deletePerson(item: UserModel) {
    this.apiService.deletePerson(item).subscribe( x => {
      this.responseObject = x;
      if (this.responseObject){
        alert(this.responseObject.message);
      }else {
        alert("Deleting failed");
      }
    });
  }

  updatePerson() {
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

    this.apiService.updatePerson(model).subscribe( x => {
      if (this.responseObject){
        alert(this.responseObject.message);
      }else {
        alert("updating failed");
      }
    });
  }
}
