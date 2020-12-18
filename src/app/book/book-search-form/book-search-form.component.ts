import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../../service/api-service';
import {BookModel} from '../../share/models/book.model';
import {NotificationService} from '../../service/notification.service';

@Component({
  selector: 'app-book-search-form',
  templateUrl: './book-search-form.component.html',
  styleUrls: ['./book-search-form.component.css']
})
export class BookSearchFormComponent implements OnInit {

  bookForm: FormGroup;
  bookList: BookModel[];

  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService,
              private notificationService: NotificationService) {
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
    let formModel = this.bookForm.value;
    bookModel.bookName = formModel.bookName;
    bookModel.authorName = formModel.authorName;
    bookModel.isbn = formModel.isbn;
    bookModel.classification = formModel.classification;
    if (bookModel.bookName || bookModel.authorName || bookModel.isbn || bookModel.isbn) {
      this.apiService.searchBookByFilter(bookModel).subscribe({
        next: this.onSuccess.bind(this),
        error: this.onError.bind(this),
      });
    } else {
      this.notificationService.showError('no item found', 'ERROR');
    }
  }

  private onSuccess(response) {
    this.bookList = response.data;
    this.notificationService.showInfo(response.message, 'info');
  }

  private onError(error) {
    this.notificationService.showError(error.status, 'SearchFailed');
  }
}
