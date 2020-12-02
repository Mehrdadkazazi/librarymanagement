import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from './pages/book/book.component';
import {SignUpComponent} from './pages/account-panel/sign-up/sign-up.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {AccountManagementComponent} from './pages/account-management/account-management.component';
import {AccountInsertFormComponent} from './pages/account-management/account-insert-form/account-insert-form.component';
import {AccountSearchFormComponent} from './pages/account-management/account-search-form/account-search-form.component';
import {LendAndReferComponent} from './pages/lend-and-refer/lend-and-refer.component';
import {RoleManagementComponent} from './pages/account-management/role-management/role-management.component';
import {ReferBookComponent} from './pages/lend-and-refer/lending-book-action/refer-book/refer-book.component';


const routes: Routes = [
  {
    component : HomePageComponent,
    path : 'home'
  },
  {
    component: BookComponent,
    path: 'book',
    loadChildren: () => import('./pages/book/book.module').then(m => m.BookModule)
  },
  {
    component: SignUpComponent,
    path: 'signUp'
  },
  {
    component : AccountManagementComponent,
    path : "user"
  },
  {
    component : AccountInsertFormComponent,
    path : "user/save"
  },
  {
    component : AccountSearchFormComponent,
    path : "user/search"
  },
  {
    component : LendAndReferComponent,
    path : "lendAndRefer"
  },
  {
    component : RoleManagementComponent,
    path : "user/roleManagement"
  },
  {
    component : ReferBookComponent,
    path : "referBook"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
