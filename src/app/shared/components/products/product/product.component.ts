import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproducts } from 'src/app/shared/model/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productId! : number
  productObject! : Iproducts

  constructor(
    private _route : ActivatedRoute,
    private _router : Router,
    private _productsService : ProductsService
    ) { }

  ngOnInit(): void {
    console.log(this._route.snapshot);
    this.productId = +this._route.snapshot.params['id']
    console.log(this.productId);
    console.log(typeof this.productId);
    this.productObject = this._productsService.getSingleProd(this.productId)!
    console.log(this.productObject); 
  }

  goToEditProd(){
    this._router.navigate(['/products', this.productObject.pid, 'edit'],{
      queryParamsHandling : 'preserve'
    })
  }

}
