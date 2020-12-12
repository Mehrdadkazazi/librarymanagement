import {AbstractUser} from './abstract-user';

export class BookModel extends AbstractUser {
  bookName ?: string;
  isbn ?: string;
  authorName ?: string;
  classification?: string;
  activation ?: number;
  status ?: number;

  constructor() {
    super();
    this.bookName = '';
    this.isbn = '';
    this.authorName = '';
    this.classification = '';
    this.activation = 1;
    this.status = 0;
  }
}
