import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInsertFormComponent } from './book-insert-form.component';

describe('BookInsertFormComponent', () => {
  let component: BookInsertFormComponent;
  let fixture: ComponentFixture<BookInsertFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookInsertFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInsertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
