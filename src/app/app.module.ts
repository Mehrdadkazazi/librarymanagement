import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SignUpComponent} from './pages/account-panel/sign-up/sign-up.component';
import {AccountPanelComponent} from './pages/account-panel/account-panel.component';
import {AppRoutingModule} from './app-routing-module';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {BookModule} from './book/book.module';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule, DatePipe} from '@angular/common';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {FooterComponent} from './pages/footer/footer.component';
import {HeaderComponent} from './pages/header/header.component';
import {ApiService} from './service/api-service';
import {HttpClientModule} from '@angular/common/http';
import {AccountManagementModule} from './account-management/account-management.module';
import {AbstractUser} from './share/models/abstract-user';
import {LendAndReferModule} from './lend-and-refer/lend-and-refer.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {NotificationService} from './service/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    AccountPanelComponent,
    NotFoundComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BookModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccountManagementModule,
    LendAndReferModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    FormBuilder,
    ApiService,
    DatePipe,
    AbstractUser,
    NotificationService
  ],
  exports: [
    HeaderComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
