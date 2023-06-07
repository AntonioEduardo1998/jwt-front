import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { CreateDepositComponent } from './pages/create-deposit/create-deposit.component';
import { ProductsComponent } from './pages/products/products.component';
import { BuyProductComponent } from './pages/buy-product/buy-product.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'create-product',
    component: CreateProductComponent,
  },
  {
    path: 'create-deposit',
    component: CreateDepositComponent,
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'buy-product',
    component: BuyProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
