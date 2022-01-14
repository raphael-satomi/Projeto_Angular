import { HttpClient } from '@angular/common/http';
import { Product } from './../../components/product/product.model';
import { ProductService } from './../../components/product/product.service';
import { UserService } from './../../core/user/user.service';
import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

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
    private userService: UserService,
    public dialog: MatDialog,
    private productService: ProductService
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

  openDialog() {
    const dialogRef = this.dialog.open(AppDialogProductCreate);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  navigateToProductCreate(): void
  {
    this.router.navigate(['/products/create'])
  }
}

@Component({
  selector: 'app-dialog-product-create',
  templateUrl: './product-create-dialog.html',
  styleUrls: ['./product-create-dialog.scss']
})
export class AppDialogProductCreate {
  selectedFile = null;
  product: Product = {
    name: '',
    price: null,
    file: null
  }

  constructor(
    private router: Router,
    private headerService: HeaderService,
    private userService: UserService,
    public dialog: MatDialog,
    private productService: ProductService,
    private http: HttpClient
  ) {
  }

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  cancelProduct():void{
    this.router.navigate(['/products']);
  }

  createProduct():void{
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.product.file = fd;
    this.productService.create( this.product ).subscribe(() => {
      this.productService.showMessage("Produto Criado");
      this.router.navigate(['/products'])
    })

  }
}
