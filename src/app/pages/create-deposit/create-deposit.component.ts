import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DepositService } from 'src/app/services/deposit.service';

@Component({
  selector: 'app-create-deposit',
  templateUrl: './create-deposit.component.html',
  styleUrls: ['./create-deposit.component.scss'],
})
export class CreateDepositComponent {
  private readonly depositService = inject(DepositService);

  private readonly fb = new FormBuilder().nonNullable;

  public form = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    branch: this.fb.control('', [Validators.required]),
  });

  public createDeposit(): void {
    this.depositService
      .create({
        name: this.form.value.name,
        branch: this.form.value.branch,
      })
      .subscribe();
  }
}
