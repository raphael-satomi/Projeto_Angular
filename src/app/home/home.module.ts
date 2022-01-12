import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { SignInComponent } from "./signin/signin.component";
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [ SignInComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    VMessageModule,
    HttpClientModule
  ]
})
export class HomeModule
{

}
