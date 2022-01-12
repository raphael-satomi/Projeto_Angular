import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/auth/auth.guard';
import { SignInComponent } from './home/signin/signin.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: "products",
    component: ProductCrudComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'products/create',
    component: ProductCreateComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'products/update/:id',
    component: ProductUpdateComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'products/delete/:id',
    component: ProductDeleteComponent,
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
