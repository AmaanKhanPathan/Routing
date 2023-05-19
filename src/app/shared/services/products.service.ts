import { Injectable } from '@angular/core';
import { Iproducts } from '../model/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsArray : Array<Iproducts> = [
    {
      pname : "Samsung31",
      pid : 1,
      pstatus : "In-Progress",
      canReturn : 1
    },
    {
      pname : "Samsung 70 Tv",
      pid : 2,
      pstatus : "Dispatched",
      canReturn : 1
    },
    {
      pname : "Iphone",
      pid : 3,
      pstatus : "Delivered",
      canReturn : 0
    },
  ]

  constructor() { }

  getAllProducts() : Array<Iproducts>{
    return this.productsArray
  }

  getSingleProd(id:number){
    return this.productsArray.find(prod=> prod.pid === id)
  }

  updateProduct(pObj : Iproducts){
    this.productsArray.forEach(prod => {
      if(prod.pid === pObj.pid){
        prod.pname = pObj.pname;
        prod.pstatus = pObj.pstatus
      }
    })
  }
}
