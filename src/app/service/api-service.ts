import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Config} from './config';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {LendingModel} from '../share/models/lending.model';
import {BookModel} from '../share/models/book.model';
import {UserModel} from '../share/models/user.model';
import {AbstractUserModel} from '../share/models/abstract-user.model';
import {AuthService} from './auth.service';

@Injectable()

export class ApiService {

  config = Config;

  constructor(private http: HttpClient,
              private authService: AuthService,
  ) {
  }

  public loginService(abstractUser: AbstractUserModel): Observable<any> {

    return this.http.post(this.config.apiURL + 'authenticate', abstractUser).pipe(map(responseEntity => {
      return responseEntity;
    }));
  }

  public addBook(book: BookModel): Observable<any> {
    let tokenString = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization' ,'Bearer ' +  tokenString)
    return this.http.post(this.config.apiURL + 'books' + '/save', book , {headers}).pipe(map(responseObject => {
      return responseObject;
    }));
  }

  public searchBookByFilter(book: BookModel): Observable<any> {
    let tokenString = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization' ,'Bearer ' +  tokenString)
    return this.http.post(this.config.apiURL + 'books' + '/findAll', book, {headers}).pipe(map(bookList => {
      return bookList;
    }));
  }

  public deleteBookItem(itemQuery: BookModel): Observable<any> {
    let tokenString = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization' ,'Bearer ' +  tokenString)
    return this.http.post(this.config.apiURL + 'books' + '/delete', itemQuery , {headers}).pipe(map(responseObject => {
      return responseObject;
    }));
  }

  public searchAllBook(book: BookModel): Observable<any> {
    let tokenString = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization' ,'Bearer ' +  tokenString)
    return this.http.post(this.config.apiURL + 'books' + '/findAll', book , {headers}).pipe(map(bookList => {
      return bookList;
    }));
  }

  public searchFreeBooks(book: BookModel): Observable<any> {
    let tokenString = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization' ,'Bearer ' +  tokenString)
    return this.http.post(this.config.apiURL + 'books' + '/findFreeBooks', book , {headers}).pipe(map(bookList => {
      return bookList;
    }));
  }

  public updateItem(formItem: BookModel): Observable<any> {
    let tokenString = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization' ,'Bearer ' +  tokenString)
    return this.http.post(this.config.apiURL + 'books' + '/update', formItem , {headers}).pipe(map(responseObject => {
      return responseObject;
    }));
  }

  public addPerson(user: UserModel): Observable<any> {
    let tokenString = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization' ,'Bearer ' +  tokenString)
    return this.http.post(this.config.apiURL + 'member' + '/save', user , {headers}).pipe(map(responseObject => {
      return responseObject;
    }));
  }

  public searchUserByFilter(user: UserModel): Observable<any> {
    let tokenString = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization' ,'Bearer ' +  tokenString)
    return this.http.post(this.config.apiURL + 'member' + '/findAll', user , {headers}).pipe(map(userList => {
      return userList;
    }));
  }

  public searchAllUser(user: UserModel): Observable<any> {
    let tokenString = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization' ,'Bearer ' +  tokenString)
    return this.http.post(this.config.apiURL + 'member' + '/findAll', user , {headers}).pipe(map(userList => {
      return userList;
    }));
  }

  public deletePerson(user: UserModel): Observable<any> {
    let tokenString = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization' ,'Bearer ' +  tokenString)
    return this.http.post(this.config.apiURL + 'member' + '/delete', user , {headers});
  }

  public updatePerson(user: UserModel): Observable<any> {
    let tokenString = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization' ,'Bearer ' +  tokenString)
    return this.http.post(this.config.apiURL + 'member' + '/update', user  ,{headers});
  }

  public lendingBook(lendingModel: LendingModel): Observable<any> {
    let tokenString = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization' ,'Bearer ' +  tokenString)
    return this.http.post(this.config.apiURL + 'libraryManagement' + '/lendingBook', lendingModel , {headers}).pipe(map(responseObject => {
      return responseObject;
    }));
  }

  public searchSavedBook(bookModel: BookModel): Observable<any> {
    let tokenString = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization' ,'Bearer ' +  tokenString)
    return this.http.post(this.config.apiURL + 'libraryManagement' + '/findSavedBook', bookModel , {headers}).pipe(map(responseObject => {
      return responseObject;
    }));
  }

  referBook(bookResponseObject: BookModel) {
    let tokenString = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization' ,'Bearer ' +  tokenString)
    return this.http.post(this.config.apiURL + 'libraryManagement' + '/referBook', bookResponseObject , {headers}).pipe(map(responseObject => {
      return responseObject;
    }));
  }
}
