import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from './book/book.component';
import {SignUpComponent} from './pages/account-panel/sign-up/sign-up.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {AccountManagementComponent} from './account-management/account-management.component';
import {LendAndReferComponent} from './lend-and-refer/lend-and-refer.component';
import {RoleManagementComponent} from './account-management/role-management/role-management.component';


const routes: Routes = [
  {
    component: SignUpComponent,
    path: 'signUp'
  },
  {
    component: HomePageComponent,
    path: 'home'
  },
  {
    component: BookComponent,
    path: 'book',
    loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  },
  {
    component: AccountManagementComponent,
    path: 'accountManagement',
    loadChildren: () => import('./account-management/account-management.module').then(m => m.AccountManagementModule)
  },
  {
    component: LendAndReferComponent,
    path: 'lendAndRefer',
    loadChildren: () => import('./lend-and-refer/lend-and-refer.module').then(m => m.LendAndReferModule)
  },
  {
    component: RoleManagementComponent,
    path: 'user/roleManagement'
  },
  /* {
     component: NotFoundComponent,
     path: '404'
   },
   {
     path: '**',
     redirectTo: '404'
   }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
