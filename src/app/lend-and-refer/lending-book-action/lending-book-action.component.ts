import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../../service/api-service';
import {LendingModel} from '../../share/models/lending.model';
import {BookModel} from '../../share/models/book.model';
import {UserModel} from '../../share/models/user.model';
import {NotificationService} from '../../service/notification.service';

@Component({
  selector: 'app-lending-book-action',
  templateUrl: './lending-book-action.component.html',
  styleUrls: ['./lending-book-action.component.css']
})
@Injectable()
export class LendingBookActionComponent implements OnInit {

  bookForm: FormGroup;
  userForm: FormGroup;
  bookResponseObject: BookModel;
  userResponseObject: UserModel;
  lendingResponseObject: any;

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              public notificationService: NotificationService,) {
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      cardId: null,
      name: null,
      family: null,
      role: null,
      nationalCode: null,
    });
    this.bookForm = this.formBuilder.group({
      bookName: null,
      isbn: null,
      authorName: null,
      classification: null,
    });
    this.userForm = this.formBuilder.group({
      cardId: null,
      name: null,
      family: null,
      role: null,
      nationalCode: null,
    });
  }

  lendingBookToUser() {
    let lendingModel = new LendingModel();
    lendingModel.bookId = this.bookResponseObject.id;
    lendingModel.memberId = this.userResponseObject.id;
    this.apiService.lendingBook(lendingModel).subscribe(x => {
      this.lendingResponseObject = x;
      if (x) {
        alert(this.lendingResponseObject.message);
      } else {
        alert('lendingBookToUser failed ...');
      }
    });
  }

  searchFreeBooks() {
    let bookModel = new BookModel();
    let bookForm = this.bookForm.value;
    bookModel.bookName = bookForm.bookName;
    bookModel.isbn = bookForm.isbn;
    bookModel.authorName = bookForm.authorName;
    bookModel.classification = bookForm.classification;

    this.apiService.searchFreeBooks(bookModel).subscribe(response => {
      if (!response.data[0]) {
        alert("not found result");
        this.notificationService.showError('not found result', 'not found');
      } else {
        this.notificationService.showSuccess('search Done', 'success');
        alert("search Done");
        return this.bookResponseObject = response.data[0];
      }
    });
  }

  searchAccount() {
    let form = this.userForm.value;
    let model = new UserModel();
    model.name = form.name;
    model.family = form.family;
    model.cardId = form.cardId;
    model.nationalCode = form.nationalCode;

    this.apiService.searchUserByFilter(model).subscribe(x => {
      this.userResponseObject = x.data[0];
    });
  }
}
