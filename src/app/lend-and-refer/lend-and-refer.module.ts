import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LendingBookActionComponent} from './lending-book-action/lending-book-action.component';
import {ReferBookComponent} from './refer-book/refer-book.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LendAndReferComponent} from './lend-and-refer.component';


@NgModule({
  declarations: [
    LendAndReferComponent,
    LendingBookActionComponent,
    ReferBookComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        component: LendAndReferComponent,
        path: 'lendAndRefer',
        children: [
          {
            component: ReferBookComponent,
            path: 'referBook'
          },
          {
            component: LendingBookActionComponent,
            path: 'lendingBook'
          }
        ]
      }
    ]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LendAndReferModule {
}
