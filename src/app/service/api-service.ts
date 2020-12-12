import {HttpClient} from '@angular/common/http';
import {Config} from './config';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {LendingModel} from '../share/models/lending-model';
import {BookModel} from '../share/models/bookModel';
import {UserModel} from '../share/models/user-model';
import {AbstractUser} from '../share/models/abstract-user';

@Injectable()

export class ApiService {

  config = Config;

  constructor(private http: HttpClient) {
  }

  public loginService(abstractUser: AbstractUser): Observable<any> {
    return this.http.post(this.config.apiURL + 'authenticate', abstractUser).pipe(map(responseEntity => {
      return responseEntity;
    }));
  }

  public addBook(book: BookModel): Observable<any> {
    return this.http.post(this.config.apiURL + 'book' + '/save', book).pipe(map(responseObject => {
      return responseObject;
    }));
  }

  public searchBookByFilter(book: BookModel): Observable<any> {
    return this.http.post(this.config.apiURL + 'book' + '/findAll', book).pipe(map(bookList => {
      debugger;
      return bookList;
    }));
  }

  public deleteBookItem(itemQuery: BookModel): Observable<any> {
    return this.http.post(this.config.apiURL + 'book' + '/delete', itemQuery).pipe(map(responseObject => {
      return responseObject;
    }));
  }

  public searchAllBook(book: BookModel): Observable<any> {
    return this.http.post(this.config.apiURL + 'book' + '/findAll', book).pipe(map(bookList => {
      return bookList;
    }));
  }

  public searchFreeBooks(book: BookModel): Observable<any> {
    return this.http.post(this.config.apiURL + 'book' + '/findAll', book).pipe(map(bookList => {
      return bookList;
    }));
  }

  public updateItem(formItem: BookModel): Observable<any> {
    return this.http.post(this.config.apiURL + 'book' + '/update', formItem).pipe(map(responseObject => {
      return responseObject;
    }));
  }

  public addPerson(user: UserModel): Observable<any> {
    return this.http.post(this.config.apiURL + 'member' + '/save', user).pipe(map(responseObject => {
      return responseObject;
    }));
  }

  public searchUserByFilter(user: UserModel): Observable<any> {
    return this.http.post(this.config.apiURL + 'member' + '/findAll', user).pipe(map(userList => {
      return userList;
    }));
  }

  public searchAllUser(user: UserModel): Observable<any> {
    return this.http.post(this.config.apiURL + 'member' + '/findAll', user).pipe(map(userList => {
      return userList;
    }));
  }

  public deletePerson(user: UserModel): Observable<any> {
    return this.http.post(this.config.apiURL + 'member' + '/delete', user);
  }

  public updatePerson(user: UserModel): Observable<any> {
    return this.http.post(this.config.apiURL + 'member' + '/update', user);
  }

  public lendingBook(lendingModel: LendingModel): Observable<any> {
    return this.http.post(this.config.apiURL + 'lending' + '/lendingBook', lendingModel).pipe(map(responseObject => {
      return responseObject;
    }));
  }

  public searchSavedBook(bookModel: BookModel): Observable<any> {
    return this.http.post(this.config.apiURL + 'lending' + '/findSavedBook', bookModel).pipe(map(responseObject => {
      return responseObject;
    }));
  }

  referBook(bookResponseObject: BookModel) {
    return this.http.post(this.config.apiURL + 'lending' + '/referBook', bookResponseObject).pipe(map(responseObject => {
      return responseObject;
    }));
  }
}
