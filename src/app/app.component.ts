import {Component, OnInit} from '@angular/core';
import {ApiService} from './service/api-service';
import {AbstractUserModel} from './share/models/abstract-user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private abstractUser: AbstractUserModel,
  ) {
    this.logInPageStatus = true;
  }

  ngOnInit() {
    // this.apiService.loginService(this.abstractUser).subscribe(x => {
    //   this.abstractUser.jwt = x;
    // });
  }

  title = 'front';
  logInPageStatus: boolean;
  HomePath: string;

  hideLogInPage() {
    this.logInPageStatus = false;
    this.HomePath = 'book';
  }
}
