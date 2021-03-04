import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  constructor( private productsService: ProductService ) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
     this.productsService.getProducts();
  }

  onGetSelectedProducts() {
    this.productsService.getSelectedProducts();
  }
}
