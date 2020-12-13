import {Injectable} from '@angular/core';
import {StorageService} from './storage.service';

@Injectable()

export class AuthService{
  private auth_key = 'user-data';
  private token_key = 'token-data';

  constructor(private storage: StorageService) { }

  public isUser() {
    return !!this.getUser();
  }

  public setUser(userData:any) {

    this.storage.set(this.auth_key, userData);
  }

  public getUser() {
    return this.storage.get(this.auth_key);
  }

  public logout() {
    this.storage.remove(this.auth_key);
    this.storage.remove(this.token_key);
  }

  public setToken(token: string) {
    this.storage.set(this.token_key, token);
  }

  public getToken() {
    return this.storage.get(this.token_key);
  }
}
