import {NgModule} from '@angular/core';
import {BookInsertFormComponent} from './book-insert-form/book-insert-form.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookSearchFormComponent} from './book-search-form/book-search-form.component';
import {RouterModule} from '@angular/router';
import {BookComponent} from './book.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AbstractFormComponent} from '../pages/abstract-form/abstract-form.component';
import {UserService} from '../service/User.Service';

@NgModule({
  declarations: [
    BookComponent,
    BookInsertFormComponent,
    BookListComponent,
    BookSearchFormComponent,
    AbstractFormComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        component: BookComponent,
        path: 'book',
        children: [
          {
            //canActivate: [UserService],
            component: BookInsertFormComponent,
            path: 'insert'
          },
          {
            component: BookSearchFormComponent,
            path: 'search'
          }
        ]
      }
    ]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    FormsModule
  ],
  exports: [
    AbstractFormComponent,
    BookSearchFormComponent,
    BookListComponent
  ]
})
export class BookModule {
}
