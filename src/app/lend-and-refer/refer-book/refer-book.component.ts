import {Component, OnInit} from '@angular/core';
import {BookModel} from '../../share/models/book.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../../service/api-service';
import {NotificationService} from '../../service/notification.service';

@Component({
  selector: 'app-refer-book',
  templateUrl: './refer-book.component.html',
  styleUrls: ['./refer-book.component.css']
})
export class ReferBookComponent implements OnInit {
  bookForm: FormGroup;
  userForm: FormGroup;
  bookResponseObject : BookModel;
  responseObject : any;
  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private notificationService : NotificationService,
  ) {
  }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      bookName: null,
      isbn: null,
      authorName: null,
      classification: null,
    });
  }

  searchBook() {
    let bookModel = new BookModel();
    let bookForm = this.bookForm.value;
    bookModel.id = null;
    bookModel.bookName = bookForm.bookName;
    bookModel.isbn = bookForm.isbn;
    bookModel.authorName = bookForm.authorName;
    bookModel.classification = bookForm.classification;

    this.apiService.searchSavedBook(bookModel).subscribe( {
      next : this.onSuccess.bind(this),
      error : this.onError.bind(this),
    });
  }

  referBook() {
      this.apiService.referBook(this.bookResponseObject).subscribe(x => {
        this.responseObject = x;
        if (x){
          alert(this.responseObject.message);
        }else {
          alert("refer failed")
        }
      })
  }

  private onSuccess(response){
    this.bookResponseObject = response.data[0];
    this.notificationService.showInfo(response.message, 'info');
  }

  private onError (error){
    this.notificationService.showError(error.status, 'SearchFailed');
  }
}
