import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs/operators';
import { DepositService } from 'src/app/services/deposit.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatSelectModule,
  ],
})
export class BuyProductComponent {
  private readonly fb = new FormBuilder().nonNullable;

  private readonly productService = inject(ProductService);

  private readonly depositService = inject(DepositService);

  private snackBar = inject(MatSnackBar);

  private router = inject(Router);

  public products$ = this.productService.products();

  public deposits$ = this.depositService.deposits();

  public form = this.fb.group({
    productId: this.fb.control('', [Validators.required]),
    quantity: this.fb.control('', [Validators.required]),
    price: this.fb.control('', [Validators.required]),
    typeDescription: this.fb.control('', [Validators.required]),
    document: this.fb.control('', [Validators.required]),
    depositId: this.fb.control('', [Validators.required]),
  });

  public buyProduct(): void {
    this.productService
      .buyProduct(this.form.value)
      .pipe(
        tap(() => {
          this.snackBar.open('Product purchased successfully', 'OK', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.router.navigate(['/payable-titles']);
        }),
        take(1)
      )
      .subscribe();
  }
}
