import { NgModule } from "@angular/core";
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products-list/products/products.component';

@NgModule({
  imports: [

  ],
  declarations: [
    ProductsFormComponent,
    ProductsListComponent,
    ProductComponent,
    ProductsComponent
  ]
})
export class ProductsModule
{

}
