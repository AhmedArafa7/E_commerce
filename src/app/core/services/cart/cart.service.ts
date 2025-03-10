import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private httpClient:HttpClient) {}


    myToken:any = localStorage.getItem('token');


  

  addProductToCart(id:string):Observable<any>{
    return this.httpClient.post(`${environment.baseUrl}/api/v1/cart`,
      {
        'productId':id
      },
      {
        headers:{
          token: this.myToken
        }
  });
  }

  getLoggedUserCart():Observable<any>{
    return this.httpClient.get(`${environment.baseUrl}/api/v1/cart`,
      {
        headers:{
          token: this.myToken
      }
    });
  }

  removeSpecificCartItem(id:string):Observable<any>{
    return this.httpClient.delete(`${environment.baseUrl}/api/v1/cart/${id}`,
      {
        headers:{
          token: this.myToken
        }
    });
  }

  ClearCart():Observable<any>{
    return this.httpClient.delete(`${environment.baseUrl}/api/v1/cart`,
      {
        headers:{
          token: this.myToken
        }
    });
  }

  updateProductQuantity(id:string, newCount:number):Observable<any>{
    return this.httpClient.put(`${environment.baseUrl}/api/v1/cart/${id}`,
      {
        'count': newCount
      },
      {
        headers:{
          token: this.myToken
        }
    });
  }
}
