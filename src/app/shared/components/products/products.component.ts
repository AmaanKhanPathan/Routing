import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproducts } from '../../model/products.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsInfo : Array<Iproducts> = []
  // selectedProductId ! : number;
  selectedProduct! : Iproducts

  constructor(
    private _productsService : ProductsService,
    private _route : Router
    ) { }

  ngOnInit(): void {
    this.productsInfo = this._productsService.getAllProducts()
    // this.selectedProductId = this.productsInfo[0].pid
    this.selectedProduct = this.productsInfo[0]
  }

  onUserClick(){
    this._route.navigate(['/users'])
  }

}
