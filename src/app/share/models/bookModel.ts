import {AbstractUser} from './abstract-user';

export class BookModel extends AbstractUser{
  bookName ?: string;
  isbn ?: string;
  authorName ?: string;
  classification?: string;

  constructor() {
    super();
    this.bookName = '';
    this.isbn = '';
    this.authorName = '';
    this.classification = '';
  }
}
