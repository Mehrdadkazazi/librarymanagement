import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPanelListComponent } from './account-panel-list.component';

describe('AccountPanelListComponent', () => {
  let component: AccountPanelListComponent;
  let fixture: ComponentFixture<AccountPanelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountPanelListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPanelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
