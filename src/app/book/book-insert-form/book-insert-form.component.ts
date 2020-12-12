import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../../service/api-service';
import {BookModel} from '../../share/models/bookModel';

@Component({
  selector: 'app-book-insert-form',
  templateUrl: './book-insert-form.component.html',
  styleUrls: ['./book-insert-form.component.css']
})
export class BookInsertFormComponent implements OnInit {
  bookForm: FormGroup;
  bookModel: BookModel;
  responseObject : any ;

  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService,) {
  }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      bookName: null,
      isbn: null,
      authorName: null,
      classification: null
    });
  }

  onSubmit() {
    let bookModel = new BookModel();
    let formModel = this.bookForm.value;
    bookModel.bookName = formModel.bookName;
    bookModel.authorName = formModel.authorName;
    bookModel.isbn = formModel.isbn;
    bookModel.classification = formModel.classification;

    this.apiService.addBook(bookModel).subscribe(x => {
      this.responseObject = x;
      if (x) {
        alert(this.responseObject.message);
      }else {
        alert ("save failed ...")
      }
    });
  }
}
