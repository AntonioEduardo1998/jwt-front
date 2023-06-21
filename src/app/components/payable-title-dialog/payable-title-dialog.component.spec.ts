import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayableTitleDialogComponent } from './payable-title-dialog.component';

describe('PayableTitleDialogComponent', () => {
  let component: PayableTitleDialogComponent;
  let fixture: ComponentFixture<PayableTitleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayableTitleDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayableTitleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
