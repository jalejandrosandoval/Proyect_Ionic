import { Component, OnInit } from '@angular/core';
import { ProductsModel } from '../Models/Products/products-model';
import { ProductsService } from '../Services/Products/products.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  _IProduct : ProductsModel[];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getData();    
  }

  //Getting Employees Informations from WebAPI

  getData() {
    this.productService
      .getProducts()
      .subscribe(product_AWS => this._IProduct = product_AWS,
        error => console.log(error)
        );
  
  }


}
