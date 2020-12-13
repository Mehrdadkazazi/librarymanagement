import {Injectable} from '@angular/core';

@Injectable()

export class StorageService {

  public get(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  public set(key: string, value: string | any | null) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public remove(key: string) {
    localStorage.removeItem(key);
  }

  public clearAll() {
    localStorage.clear();
  }

}
