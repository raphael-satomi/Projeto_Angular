import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { Product } from '../product.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  )
  {
    this.products = [];
  }

  ngOnInit(): void {
    this.productService.read().subscribe( products => {
      this.products = products
      console.log( products )
    });
  }

  openDialog( id: number ) {
    this.dialog.open(AppDialogProductDelete,{
      data: {
        dataKey: id
      }
    });
  }

}

@Component({
  selector: 'app-product-dialog-delete',
  templateUrl: './product-delete-dialog.html',
  styleUrls: ['./product-delete-dialog.scss']
})
export class AppDialogProductDelete {
  product: Product = {
    name: '',
    price: null,
    file: null
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

  }

  deleteProduct():void {
    this.productService.delete( this.data.dataKey ).subscribe(
      () => {
        this.productService.showMessage("Produto Excluido!");
        this.router.navigate(['products']);
      }
    )
  }

}
