import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountSearchFormComponent} from './account-search-form/account-search-form.component';
import {AccountPanelListComponent} from './account-panel-list/account-panel-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RoleManagementComponent} from './role-management/role-management.component';
import {RouterModule} from '@angular/router';
import {AccountManagementComponent} from './account-management.component';
import {AccountInsertFormComponent} from './account-insert-form/account-insert-form.component';


@NgModule({
  declarations: [
    AccountManagementComponent,
    AccountSearchFormComponent,
    AccountPanelListComponent,
    RoleManagementComponent,
    AccountInsertFormComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        component: AccountManagementComponent,
        path: 'accountManagement',
        children: [
          {
            path: 'save',
            component: AccountInsertFormComponent
          },
          {
            path: 'search',
            component: AccountSearchFormComponent,
          },
          {
            path : "roleManagement",
            component : RoleManagementComponent
          }
        ]
      }
    ]),
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
