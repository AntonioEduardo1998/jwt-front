import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
  private readonly productService = inject(ProductService);

  private readonly fb = new FormBuilder().nonNullable;

  public form = this.fb.group({
    name: this.fb.control('', [Validators.required]),
  });

  public createProduct(): void {
    this.productService
      .create({
        name: this.form.value.name,
      })
      .subscribe();
  }
}
