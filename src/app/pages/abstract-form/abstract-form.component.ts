import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookModel} from '../../share/models/book.model';
import {ApiService} from '../../service/api-service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-abstract-form',
  templateUrl: './abstract-form.component.html',
  styleUrls: ['./abstract-form.component.css']
})
export class AbstractFormComponent implements OnInit {

  public responseData = null;
  public categories: any[] = [];
  public bookFormModel = BookModel;
  bookViewForm: FormGroup;

  constructor(private builder: FormBuilder,
              private apiService: ApiService,
              private http: HttpClient,
  ) {
    this.bookViewForm = this.builder.group({
      bookName: '',
      ISBN: '',
      authorName: '',
      classification: ''
    });
  }

  ngOnInit(): void {

  }

  onSubmit(bookViewForm: FormGroup): Observable<FormGroup> {
    console.log(bookViewForm);
    console.log('-------form sending-------');
    return this.http.post<FormGroup>('localhost:8081/bookApi/save', bookViewForm.value);

  }

  private onSuccess(response) {
    console.log('Success');
    console.log(response);

    this.responseData = response;

    for (let key in response) {
      this.categories.push({
        key: key,
        data: response[key]
      });
    }
    console.log(this.categories);
  }

  private onError(error) {
  }

  private prepareObject(bookViewForm) {
  }

}
