import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SignUpComponent} from './pages/account-panel/sign-up/sign-up.component';
import {AccountPanelComponent} from './pages/account-panel/account-panel.component';
import {AccountManagementComponent} from './pages/account-management/account-management.component';
import {AppRoutingModule} from './app-routing-module';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {BookModule} from './pages/book/book.module';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule, DatePipe} from '@angular/common';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ApiService} from './pages/service/api-service';
import {HttpClientModule} from '@angular/common/http';
import {AccountInsertFormComponent} from './pages/account-management/account-insert-form/account-insert-form.component';
import {AccountManagementModule} from './pages/account-management/account-management.module';
import {LendAndReferComponent} from './pages/lend-and-refer/lend-and-refer.component';
import {LendingBookActionComponent} from './pages/lend-and-refer/lending-book-action/lending-book-action.component';
import {ReferBookComponent} from './pages/lend-and-refer/lending-book-action/refer-book/refer-book.component';
import {AbstractUser} from './share/models/abstract-user';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    AccountPanelComponent,
    AccountManagementComponent,
    NotFoundComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    AccountInsertFormComponent,
    LendAndReferComponent,
    LendingBookActionComponent,
    ReferBookComponent,
  ],
  imports: [
    BrowserModule,
    BookModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccountManagementModule
  ],
  providers: [
    FormBuilder,
    ApiService,
    DatePipe,
    AbstractUser
  ],
  exports: [
    HeaderComponent,
    AccountManagementComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
