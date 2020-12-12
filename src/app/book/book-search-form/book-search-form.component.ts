import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../../service/api-service';
import {BookModel} from '../../share/models/bookModel';

@Component({
  selector: 'app-book-search-form',
  templateUrl: './book-search-form.component.html',
  styleUrls: ['./book-search-form.component.css']
})
export class BookSearchFormComponent implements OnInit {

  bookForm: FormGroup;
  bookList: BookModel[];

  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService,) {
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
    bookModel.jwt = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYwNjg1Njk1NywiaWF0IjoxNjA2ODIwOTU3fQ.S7h1evWRfSYpHlV_8v2_jjjkljbGPu_R-SGubJ_D2Bg';
    if (bookModel.bookName || bookModel.authorName || bookModel.isbn || bookModel.isbn) {
      this.apiService.searchBookByFilter(bookModel).subscribe(x => {
        this.bookList = x.data;
        return;
      });
    }else {
      alert("no item found");
    /*} else {
      this.apiService.searchAllBook(bookModel).subscribe(x => {
        this.bookList = x;
        return;
      });*/
    }
  }
}
