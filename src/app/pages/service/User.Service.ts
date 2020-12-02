import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable()

export class UserService implements CanActivate {
  public canActivate(prev, next) {
    return false;

    //return !!localStorage.getItem("token");
  }

}
