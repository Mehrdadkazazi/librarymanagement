import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()

export class UserService implements CanActivate {

  constructor(
   private authService : AuthService,
  ) {
  }

  public canActivate(prev, next) {

    return this.authService.isUser();
  }

}
