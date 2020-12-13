import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../service/api-service';
import {BookModel} from '../../share/models/book.model';
import {NotificationService} from '../../service/notification.service';
import {Config} from '../../service/config';

@Component({
  selector: 'app-book-insert-form',
  templateUrl: './book-insert-form.component.html',
  styleUrls: ['./book-insert-form.component.css']
})
export class BookInsertFormComponent implements OnInit {
  bookForm: FormGroup;
  bookModel: BookModel;
  responseObject: any;
  submitted: boolean = false;

  public classifications = Config.CLASSIFICATION_LIST;

  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      bookName: ['', Validators.required],
      isbn: ['', Validators.required],
      authorName: ['', Validators.required],
      classification: ['', Validators.required],
    });
  }

  get showError() {
    return this.bookForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.bookForm.invalid) {
      this.notificationService.showWarning('insert Fields', 'insert Fields');
      return;
    }
    let bookModel = new BookModel();
    let formModel = this.bookForm.value;
    bookModel.bookName = formModel.bookName;
    bookModel.authorName = formModel.authorName;
    bookModel.isbn = formModel.isbn;
    bookModel.classification = formModel.classification;

    this.apiService.addBook(bookModel).subscribe( {
      next : this.onSuccess.bind(this),
      error : this.onError.bind(this),
    });
  }
  private onSuccess(response){
    this.notificationService.showSuccess(response.message, 'success');
  }

  private onError(error){
    this.notificationService.showError(error.status, 'saveFailed');
  }
}
