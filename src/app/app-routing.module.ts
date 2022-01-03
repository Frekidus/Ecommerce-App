import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: 'products/detail/:id',
component: ProductDetailComponent
},   {
  path: 'home',
component: HomeComponent
}, 
{
  path: 'products',
component: ProductsComponent
},
{
  path: 'customer/detail/:id',
component: CustomerDetailComponent
},{
  path: 'customers',
component: CustomersComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
