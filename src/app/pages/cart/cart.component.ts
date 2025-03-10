import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart/cart.service';
import { ProductsService } from '../../core/services/products/products.service';
import { Router, RouterLink } from '@angular/router';
import { Icart } from '../../shared/interfaces/icart';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe , RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  private readonly cartService = inject(CartService);
  private readonly productsService = inject(ProductsService);
  private readonly router = inject(Router);

  
  cartDetails:Icart = {} as Icart;
  products:any = [];


  ngOnInit(): void {
    this.getCartData();
  }

  getCartData(){
    this.cartService.getLoggedUserCart().subscribe({
      next: (res) => {
        this.cartDetails = res.data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  removeItem(id:string):void{
    this.cartService.removeSpecificCartItem(id).subscribe({
      next: (res) => {
        console.log(res);
        this.cartDetails = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    });



  }

  updateCount(id:string, count:number):void{
    this.cartService.updateProductQuantity(id, count).subscribe({
      next: (res) => {
        console.log(res);
        this.cartDetails = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }




}


