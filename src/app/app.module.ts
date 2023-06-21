import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './pages/signup/signup.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { CreateDepositComponent } from './pages/create-deposit/create-deposit.component';
import { ProductsComponent } from './pages/products/products.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { BuyProductComponent } from './pages/buy-product/buy-product.component';
import { PayableTitlesComponent } from './pages/payable-titles/payable-titles.component';
import { DialogModule } from '@angular/cdk/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PayableTitleDialogComponent } from './components/payable-title-dialog/payable-title-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CreateProductComponent,
    CreateDepositComponent,
    PayableTitlesComponent,
    PayableTitleDialogComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    DialogModule,
    MatSnackBarModule,
    MatTableModule,
  ],
  exports: [CommonModule, MatTableModule, DialogModule, MatSnackBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
