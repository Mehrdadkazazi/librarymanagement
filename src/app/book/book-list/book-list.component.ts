import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../service/api-service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookModel} from '../../share/models/bookModel';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookForm: FormGroup;
  bookModel: BookModel;
  responseObject : any;
  @Input() bookList: BookModel[];
  rowDeleted : boolean = false;
  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.rowDeleted = false;
    this.bookForm = this.formBuilder.group({
      bookName: null,
      isbn: null,
      authorName: null,
      classification: null
    });
  }

  deleteBook(itemDelete) {
    this.apiService.deleteBookItem(itemDelete).subscribe(x =>{
      this.responseObject = x;
      if (x){
        alert(this.responseObject.message);
        this.rowDeleted = true;
      }else {
        alert("Deleting failed");
      }
    });
  }

  updateBook() {
    let bookModel = new BookModel();
    let formModel = this.bookForm.value;
    bookModel.bookName = formModel.bookName;
    bookModel.authorName = formModel.authorName;
    bookModel.isbn = formModel.isbn;
    bookModel.classification = formModel.classification;
    this.apiService.updateItem(bookModel).subscribe(x => {
      this.responseObject = x;
      if (x){
        alert(this.responseObject.message);
      }else {
        alert("update failed")
      }
    });
  }
}
