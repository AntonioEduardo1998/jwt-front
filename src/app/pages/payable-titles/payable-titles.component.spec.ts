import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayableTitlesComponent } from './payable-titles.component';

describe('PayableTitlesComponent', () => {
  let component: PayableTitlesComponent;
  let fixture: ComponentFixture<PayableTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayableTitlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayableTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
