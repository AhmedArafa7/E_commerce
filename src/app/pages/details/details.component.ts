import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../core/services/categories/categories.service';
import { ProductsService } from '../../core/services/products/products.service';
import { IProduct } from '../../shared/interfaces/iproduct';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  constructor() {}

  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productsService = inject(ProductsService);

  productId:any;
  productDetails:IProduct = {} as IProduct;

  ngOnInit():void {
    this.activatedRoute.paramMap.subscribe({
      next: (res) => {
        this.productId = res.get('id');
        this.productsService.getSpecificProducts(this.productId).subscribe({
          next: (res) => {
            this.productDetails = res.data;
          },
          error: (error) => {
            console.log(error);
          }
        })
      }
    }
    )
  }

}
