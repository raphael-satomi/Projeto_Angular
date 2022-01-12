import { UserService } from './../../core/user/user.service';
import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss']
})
export class ProductCrudComponent implements OnInit {
  userName: string;

  constructor(
    private router: Router,
    private headerService: HeaderService,
    private userService: UserService
  ) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
    this.userName = userService.getUserName();
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void
  {
    this.router.navigate(['/products/create'])
  }
}
