import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserModel} from '../../share/models/user.model';
import {ApiService} from '../../service/api-service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-account-insert-form',
  templateUrl: './account-insert-form.component.html',
  styleUrls: ['./account-insert-form.component.css']
})
@Injectable()
export class AccountInsertFormComponent implements OnInit {
  userForm: FormGroup;
  userModel: UserModel;
  responseObject : any;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    public datePipe : DatePipe,
  ) {
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id : null,
      cardId : null,
      name : null,
      family : null,
      birthDate : null,
      role : null,
      address : null,
      nationalCode : null,
    });
  }

  onSubmit() {
    let model = new UserModel();
    let form = this.userForm.value;
    model.id = form.id;
    model.cardId = form.cardId;
    model.name = form.name;
    model.family = form.family;
    model.birthDate = form.birthDate ;
    model.role = form.role;
    model.address = form.address;
    model.nationalCode = form.nationalCode;

    this.apiService.addPerson(model).subscribe( x=>{
      this.responseObject = x;
      if (x) {
        alert(this.responseObject.message);
      }else {
        alert ("save failed ...")
      }
    });
  }

}
