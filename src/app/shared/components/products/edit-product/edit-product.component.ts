import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproducts, Ipstatus } from 'src/app/shared/model/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productId! : number
  selectedProduct! : Iproducts
  canEdit : number = 1

  constructor(
    private _route : ActivatedRoute,
    private _router : Router,
    private _productsService : ProductsService
    ) { }

  ngOnInit(): void {
    this.productId = +this._route.snapshot.params['id']
    this.selectedProduct = this._productsService.getSingleProd(this.productId)!
    this._route.queryParams
         .subscribe((queryParams : Params)=>{
          console.log(queryParams);
          this.canEdit = +queryParams['canEdit']
          
         })
  }

  onProductUpdate(pname:HTMLInputElement, pstatus : HTMLSelectElement){
    let obj : Iproducts = {
      pname : pname.value,
      pstatus : pstatus.value as Ipstatus,
      pid : this.productId,
      canReturn : this.selectedProduct.canReturn
    }
    this._productsService.updateProduct(obj)
    this._router.navigate(['products', this.productId])
  }
  

}
