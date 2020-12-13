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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AccountManagementModule} from './account-management/account-management.module';
import {AbstractUserModel} from './share/models/abstract-user.model';
import {LendAndReferModule} from './lend-and-refer/lend-and-refer.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {NotificationService} from './service/notification.service';
import {CustomInterceptor} from './service/custom.interceptor.service';
import {StorageService} from './service/storage.service';
import {AuthService} from './service/auth.service';
import {UserService} from './service/User.Service';

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
    HttpClientModule,
    ReactiveFormsModule,
    AccountManagementModule,
    LendAndReferModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    FormBuilder,
    ApiService,
    DatePipe,
    AbstractUserModel,
    NotificationService,
    StorageService,
    AuthService,
    UserService,
    {
      multi : true,
      provide : HTTP_INTERCEPTORS,
      useClass : CustomInterceptor
    },
  ],
  exports: [
    HeaderComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
