import { Dialog } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { filter } from 'rxjs';
import { PayableTitleDialogComponent } from 'src/app/components/payable-title-dialog/payable-title-dialog.component';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-payable-titles',
  templateUrl: './payable-titles.component.html',
  styleUrls: ['./payable-titles.component.scss'],
})
export class PayableTitlesComponent {
  private readonly productService = inject(ProductService);
  private readonly dialog = inject(Dialog);

  public payableTitles$ = this.productService.payableTitles();

  public openPayableTitle(id: number, payableTitleOpenAmount: number) {
    this.dialog
      .open(PayableTitleDialogComponent, {
        data: {
          id,
          payableTitleOpenAmount,
        },
      })
      .closed.pipe(filter((value) => !!value))
      .subscribe(() => {
        this.payableTitles$ = this.productService.payableTitles();
      });
  }
}
