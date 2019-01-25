import { AppService } from './../../app.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  cartItems = 0;
  constructor(private router: Router, private service: AppService) {
    for(let i = 0; i<= this.service.productList.length-1; i++){
      this.cartItems += this.service.productList[i].quantity;
    }
    this.service.notifyData.subscribe(data => {
      if (data != "") {
        this.cartItems = 0;
        for(let i = 0; i<= this.service.productList.length-1; i++){
          this.cartItems += this.service.productList[i].quantity;
        }
      }
    })
  }

  goToCart() {
    this.router.navigateByUrl('cart');
  }

  redirectHome() {
    this.router.navigateByUrl('home');
  }
}
