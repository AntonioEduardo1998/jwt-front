import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-payable-title-dialog',
  templateUrl: './payable-title-dialog.component.html',
  styleUrls: ['./payable-title-dialog.component.scss'],
})
export class PayableTitleDialogComponent {
  public dialogData = inject(DIALOG_DATA);

  public readonly fb = inject(NonNullableFormBuilder);

  public readonly dialogRef = inject(DialogRef);

  public readonly snackBar = inject(MatSnackBar);

  public productService = inject(ProductService);

  public payableTitleOpenAmount = this.dialogData.payableTitleOpenAmount;

  public payableTitleId = this.dialogData.id;

  public valueControl = this.fb.control<number | null>(null, {
    validators: [
      Validators.required,
      Validators.max(this.payableTitleOpenAmount),
    ],
  });

  public pay(): void {
    this.productService
      .liquidatePayableTitle(this.payableTitleId, this.valueControl.value)
      .pipe(
        tap(() => {
          this.dialogRef.close(true);
          this.snackBar.open(
            'Payment made successfully',
            `${this.valueControl.value}`,
            {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            }
          );
        })
      )
      .subscribe();
  }
}
