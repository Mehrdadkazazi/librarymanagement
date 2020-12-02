import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountSearchFormComponent} from './account-search-form/account-search-form.component';
import {AccountPanelListComponent} from './account-panel-list/account-panel-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RoleManagementComponent } from './role-management/role-management.component';


@NgModule({
  declarations: [AccountSearchFormComponent, AccountPanelListComponent, RoleManagementComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    FormsModule
  ],
})
export class AccountManagementModule {
}
